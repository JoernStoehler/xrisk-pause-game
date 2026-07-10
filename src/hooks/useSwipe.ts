import { useCallback, useRef, useState } from "react";
import type { ChoiceDirection } from "../engine/history";
import { audio } from "./useAudio";

export type TiltDirection = ChoiceDirection | "center";

interface UseSwipeOptions {
  onSwipe: (direction: ChoiceDirection) => void;
  commitThreshold?: number;
  velocityThreshold?: number;
}

interface DragState {
  active: boolean;
  startX: number;
  startTime: number;
  offsetX: number;
}

const SPRING_BACK = "transform 300ms ease-out";
const FLY_OFF = "transform 500ms ease-in";

export function useSwipe({
  onSwipe,
  commitThreshold = 100,
  velocityThreshold = 0.5,
}: UseSwipeOptions) {
  const dragRef = useRef<DragState>({
    active: false,
    startX: 0,
    startTime: 0,
    offsetX: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);
  const currentTiltRef = useRef<TiltDirection>("center");
  const [isExiting, setIsExiting] = useState(false);
  const [tiltDirection, setTiltDirection] = useState<TiltDirection>("center");
  const [swipeProgress, setSwipeProgress] = useState(0);

  const updateTransform = useCallback(
    (x: number, transition: false | "spring" | "fly", y = 0) => {
      if (!cardRef.current) return;
      const rotation = x * 0.08;
      cardRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      cardRef.current.style.transition =
        transition === "spring" ? SPRING_BACK
        : transition === "fly" ? FLY_OFF
        : "none";
    },
    [],
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (isExiting) return;
      const el = e.currentTarget as HTMLElement;
      el.setPointerCapture(e.pointerId);
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startTime: Date.now(),
        offsetX: 0,
      };
      updateTransform(0, false);
    },
    [isExiting, updateTransform],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      dragRef.current.offsetX = dx;
      updateTransform(dx, false);

      const threshold = 30;
      let newDir: TiltDirection;
      if (dx < -threshold) newDir = "left";
      else if (dx > threshold) newDir = "right";
      else newDir = "center";

      if (newDir !== currentTiltRef.current) {
        currentTiltRef.current = newDir;
        setTiltDirection(newDir);
      }
      setSwipeProgress(Math.min(1, Math.abs(dx) / commitThreshold));
    },
    [updateTransform, commitThreshold],
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;

      const dx = dragRef.current.offsetX;
      const dt = Date.now() - dragRef.current.startTime;
      const velocity = Math.abs(dx) / Math.max(dt, 1);

      const committed =
        Math.abs(dx) > commitThreshold || velocity > velocityThreshold;

      if (committed && dx !== 0) {
        const direction = dx < 0 ? "left" : "right";
        setIsExiting(true);
        const flyTo = dx < 0 ? -window.innerWidth : window.innerWidth;
        updateTransform(flyTo, "fly");
        audio.play("whoosh");

        // Release pointer capture before callback
        const el = e.currentTarget as HTMLElement;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }

        // After fly-off animation, fire onSwipe. Don't reset local state —
        // the key change unmounts this SwipeCard and a fresh one mounts.
        setTimeout(() => {
          onSwipe(direction);
        }, 500);
      } else {
        // Spring back
        updateTransform(0, "spring");
        audio.play("springBack");
        currentTiltRef.current = "center";
        setTiltDirection("center");
        setSwipeProgress(0);
      }
    },
    [commitThreshold, velocityThreshold, onSwipe, updateTransform],
  );

  const onPointerCancel = useCallback(() => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    updateTransform(0, "spring");
    currentTiltRef.current = "center";
    setTiltDirection("center");
    setSwipeProgress(0);
  }, [updateTransform]);

  /** Trigger a full commit programmatically (for keyboard controls). */
  const commitProgrammatic = useCallback(
    (direction: ChoiceDirection) => {
      if (isExiting) return;
      setIsExiting(true);
      const flyToX =
        direction === "left" ? -window.innerWidth
        : direction === "right" ? window.innerWidth
        : 0;
      const flyToY = direction === "down" ? window.innerHeight : 0;
      updateTransform(flyToX, "fly", flyToY);
      audio.play("whoosh");
      currentTiltRef.current = direction;
      setTiltDirection(direction);
      setSwipeProgress(1);
      dragRef.current.active = false;
      setTimeout(() => {
        onSwipe(direction);
      }, 500);
    },
    [isExiting, onSwipe, updateTransform],
  );

  const style: React.CSSProperties = {
    touchAction: "none",
    cursor: isExiting ? "default" : "grab",
  };

  return {
    cardRef,
    tiltDirection,
    swipeProgress,
    isExiting,
    commitProgrammatic,
    style,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel,
    },
  };
}
