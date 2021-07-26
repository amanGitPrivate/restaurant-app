import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app with restuarant Heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Restaurant Menu/i);
  expect(linkElement).toBeInTheDocument();
});
