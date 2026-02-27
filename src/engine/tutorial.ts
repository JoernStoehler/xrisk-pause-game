const TUTORIAL_KEY = "global-pause-tutorial-done";

export function isTutorialCompleted(): boolean {
  try {
    return localStorage.getItem(TUTORIAL_KEY) === "1";
  } catch {
    return false;
  }
}

export function markTutorialCompleted(): void {
  try {
    localStorage.setItem(TUTORIAL_KEY, "1");
  } catch {
    // localStorage unavailable — ignore
  }
}
