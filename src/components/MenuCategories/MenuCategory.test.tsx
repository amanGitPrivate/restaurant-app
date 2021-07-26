import { render, screen } from "@testing-library/react";
import React from "react";
import MenuCategoriesContainer from "./index";

test("renders order list with initial data", () => {
  const myInitialState = [
    {
      id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
      name: "Starters",
    },
  ];
  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  render(<MenuCategoriesContainer />);
  const linkElement = screen.getByText(/Starters/i);
  expect(linkElement).toBeInTheDocument();
});
