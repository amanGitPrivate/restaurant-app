import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

import { get } from "../../api";
import {
  menuItem,
  selected,
  handleSelectedItems,
} from "../../common.interface";

type QuizParams = {
  categoryId: string;
};

type MenuItems = {
  selectedItems: selected[];
  handleItems: (selected: handleSelectedItems) => void;
};

const MenuItemsContainer = ({ selectedItems, handleItems }: MenuItems) => {
  const { categoryId } = useParams<QuizParams>();

  const [menu, updateMenuItems] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await get(`categories/${categoryId}/items`);
      if (data) {
        updateMenuItems(data);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {menu.map((data: menuItem) => (
          <Grid item xs={4} key={data.name}>
            <MenuItem
              selectedItems={selectedItems}
              handleItems={handleItems}
              {...data}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MenuItemsContainer;
