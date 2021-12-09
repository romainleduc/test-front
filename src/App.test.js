import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cards", () => {
  render(<App />);
  const linkElement = screen.getByText("My garage");
  expect(linkElement).toBeInTheDocument();
});
