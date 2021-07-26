import { handleSelectedItems, selected } from "../../common.interface";
import { getItemCount } from "../../utils";
import { Button, ButtonGroup } from "@material-ui/core";

import { SyledAddRemove } from "./AddRemove.styled";

interface addRemoveItem {
  selectedItems: selected[];
  addRemoveMenuItems: (selected: handleSelectedItems) => void;
  id: string;
  price: number;
  name: string;
}

const AddRemoveMenuItem = ({
  addRemoveMenuItems,
  selectedItems,
  id,
  price,
  name,
}: addRemoveItem) => (
  <SyledAddRemove>
    <ButtonGroup size="small">
      <Button
        id="add-item"
        onClick={() => addRemoveMenuItems({ id, price, name, action: "add" })}
      >
        +
      </Button>
      {getItemCount(selectedItems, id) && (
        <Button disabled>{getItemCount(selectedItems, id)}</Button>
      )}
      {getItemCount(selectedItems, id) && (
        <Button
          id="remove-item"
          onClick={() =>
            addRemoveMenuItems({ id, price, name, action: "remove" })
          }
        >
          -
        </Button>
      )}
    </ButtonGroup>
  </SyledAddRemove>
);

export default AddRemoveMenuItem;
