import { render, screen } from "@testing-library/react";
import React from "react";
import MenuItem from "./index";
import { MemoryRouter } from "react-router-dom";

test("renders menu list with initial data", () => {
  const myInitialState = [
    {
      id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
      name: "Vanilla",
      price: "10",
    },
    {
      id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e901",
      name: "Chocolate",
      price: "20",
    },
  ];
  React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

  render(
    <MemoryRouter
      initialEntries={["/category/b92940e3-2b7d-4bbe-9bd6-73251ff05e90"]}
    >
      <MenuItem
        selectedItems={[
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
            name: "Vanilla",
            price: 10,
          },
        ]}
        handleItems={jest.fn()}
      />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Vanilla/i);
  expect(linkElement).toBeInTheDocument();
  const linkPrice = screen.getByText(/10/i);
  expect(linkPrice).toBeInTheDocument();
});

