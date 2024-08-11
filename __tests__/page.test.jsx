import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LobbyDialog from "../src/app/lobbyDialog";

describe("LobbyDialog", () => {
  it("renders a heading", () => {
    render(<LobbyDialog />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  // Add more test cases for other components and functionality
});
