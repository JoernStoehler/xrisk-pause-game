// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";
import { App } from "../src/ui/App.tsx";

afterEach(cleanup);

describe("React opening-slice UI", () => {
  test("operates the intro disclosure without rebuilding the page", async () => {
    const user = userEvent.setup();
    render(<App createSeed={() => "component-intro"} />);

    const disclosure = screen.getByRole("button", { name: /what this prototype claims/i });
    const note = screen.getByText(/one hidden diagnostic world is fixed/i);
    expect(disclosure).toHaveAttribute("aria-expanded", "false");
    expect(note).not.toBeVisible();

    await user.click(disclosure);
    expect(disclosure).toHaveAttribute("aria-expanded", "true");
    expect(note).toBeVisible();
  });

  test("advances a decision path and focuses each new card", async () => {
    const user = userEvent.setup();
    render(<App createSeed={() => "component-flow"} />);

    await user.click(screen.getByRole("button", { name: /assume office/i }));
    expect(screen.getByText("MARA VOSS").closest("[data-card]")).toHaveFocus();

    await user.click(screen.getByRole("button", { name: /take joint custody/i }));
    expect(screen.getByText("LIN WEI").closest("[data-card]")).toHaveFocus();

    await user.click(screen.getByRole("button", { name: /cold-hold frontier weights/i }));
    await user.click(screen.getByRole("button", { name: /cover compute or memory/i }));
    await user.click(screen.getByRole("button", { name: /begin operations/i }));

    expect(screen.getByText(/director-general's opening dossier/i).closest("[data-outcome]")).toHaveFocus();
    expect(screen.getByRole("button", { name: /replay this world/i })).toBeVisible();
  });

  test("starts a fresh world from the persistent header control", async () => {
    const seeds = ["component-first", "component-second"];
    const user = userEvent.setup();
    render(<App createSeed={() => seeds.shift() ?? "component-extra"} />);

    await user.click(screen.getByRole("button", { name: /assume office/i }));
    await user.click(screen.getByRole("button", { name: /start a new world/i }));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("The pause exists");
    expect(screen.getByRole("button", { name: /assume office/i })).toBeVisible();
  });
});
