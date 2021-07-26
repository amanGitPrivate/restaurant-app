import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "./index";
import { MemoryRouter } from "react-router-dom";

test("renders checkout list with correct label", () => {
  render(
    <Checkout
      selectedItems={[
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
          name: "Vanilla",
          price: 10,
        },
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e901",
          name: "Vanilla1",
          price: 10,
        },
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e902",
          name: "Vanilla2",
          price: 30,
        },
      ]}
      handleItems={jest.fn()}
      clearSelection={jest.fn()}
    />
  );
  const linkElement = screen.getByText(/Checkout/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders checkout list with correct total", () => {
  render(
    <Checkout
      selectedItems={[
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
          name: "Vanilla",
          price: 10,
        },
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e901",
          name: "Vanilla1",
          price: 10,
        },
        {
          id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e902",
          name: "Vanilla2",
          price: 30,
        },
      ]}
      handleItems={jest.fn()}
      clearSelection={jest.fn()}
    />
  );
  const linkElement = screen.getByText(/50/i);
  expect(linkElement).toBeInTheDocument();
});

test("checkout: test remove items", () => {
  const handleItems = jest.fn();
  render(
    <MemoryRouter>
      <Checkout
        selectedItems={[
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
            name: "Vanilla",
            price: 10,
          },
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e901",
            name: "Vanilla1",
            price: 10,
          },
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e902",
            name: "Vanilla2",
            price: 30,
          },
        ]}
        handleItems={handleItems}
        clearSelection={jest.fn()}
      />
    </MemoryRouter>
  );

  fireEvent.click(document.querySelectorAll("#remove-item")[0]);
  expect(handleItems).toHaveBeenCalled();
});

test("checkout: test add items", () => {
  const handleItems = jest.fn();
  render(
    <MemoryRouter>
      <Checkout
        selectedItems={[
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e90",
            name: "Vanilla",
            price: 10,
          },
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e901",
            name: "Vanilla1",
            price: 10,
          },
          {
            id: "b92940e3-2b7d-4bbe-9bd6-73251ff05e902",
            name: "Vanilla2",
            price: 30,
          },
        ]}
        handleItems={handleItems}
        clearSelection={jest.fn()}
      />
    </MemoryRouter>
  );

  fireEvent.click(document.querySelectorAll("#add-item")[0]);
  expect(handleItems).toHaveBeenCalled();
});
