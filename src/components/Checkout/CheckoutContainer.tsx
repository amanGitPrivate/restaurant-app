import {
  Button,
  Box,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { ChangeEvent, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

import AddRemoveMenuItem from "../AddRemoveMenuItem";

import { post } from "../../api";
import { selected, handleSelectedItems } from "../../common.interface";
import { getTotal } from "../../utils";

interface selectedItem {
  selectedItems: selected[];
  handleItems: (selected: handleSelectedItems) => void;
  clearSelection: () => void;
}

const CheckoutContainer = ({
  selectedItems,
  handleItems,
  clearSelection,
}: selectedItem) => {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [orderfailed, orderfailedToggle] = useReducer((state) => !state, false);
  const [orderSuccess, orderSucessToggle] = useReducer(
    (state) => !state,
    false
  );
  const history = useHistory();

  const placeOrder = async () => {
    const placed = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    ).toISOString();

    const items = selectedItems.map((item) => item.id);
    try {
      await post("orders", {
        first_name: firstName,
        last_name: lastName,
        placed,
        items: [items],
      });
      orderSucessToggle();
    } catch (error) {
      orderfailedToggle();
      orderSucessToggle();
    }
  };

  const updateOrderDetails = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    attribute: string
  ) => {
    if (attribute === "firstName") {
      updateFirstName(event.target.value);
      return;
    }
    updateLastName(event.target.value);
  };

  const total = getTotal(selectedItems);

  const clearOrders = () => {
    orderSucessToggle();
    orderfailedToggle();
    if (!orderfailed) {
      updateFirstName("");
      updateLastName("");
      clearSelection();
      history.push(`/`);
    }
  };
  const itemUniqueById = [
    ...new Map(selectedItems.map((item) => [item.id, item])).values(),
  ];

  return (
    <>
      <Box mb={2} style={{ textDecoration: "underline" }}>
        <Typography variant="h4">Checkout</Typography>
      </Box>
      {itemUniqueById.map(({ id, price, name }, index) => (
        <Box mb={2} key={`${id}${index}`}>
          <Box component="span">{name}</Box>
          <Box ml={1} component="span">
            {`${price} €`}
          </Box>
          <AddRemoveMenuItem
            selectedItems={selectedItems}
            id={id}
            price={price}
            name={name}
            addRemoveMenuItems={handleItems}
          />
        </Box>
      ))}
      <Box mb={2}>
        <Typography variant="h6">{`Total ${total.toFixed(2)} €`}</Typography>
      </Box>
      <Box mb={2}>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(event) => updateOrderDetails(event, "firstName")}
        />
      </Box>

      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(event) => updateOrderDetails(event, "lastName")}
      />

      <Box mt={2}>
        <Button
          disabled={
            !selectedItems.length || !firstName.length || !lastName.length
          }
          variant="contained"
          color="primary"
          onClick={placeOrder}
        >
          Order
        </Button>
      </Box>
      <Dialog open={orderSuccess} onClose={clearOrders}>
        <DialogTitle>
          {" "}
          {orderfailed
            ? "Technical Error!!"
            : "Thank you for placing your order !! It will be served soon"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {orderfailed
              ? "Try again please"
              : "Thank you for placing your order !! It will be served soon"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearOrders} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CheckoutContainer;
