import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import MenuCategory from "./MenuCategory";

import { get } from "../../api";
import { category } from "../../common.interface";

const MenuCategoriesConainer = () => {
  const [categories, updateCategories] = useState([]);
  const [error, updateError] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const data = await get("categories");
        updateCategories(data);
      } catch (error) {
        updateError(true);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      {!error ? (
        <Grid container spacing={3}>
          {categories.length ? (
            categories.map((data: category) => (
              <Grid item xs={4} key={data.name}>
                <MenuCategory {...data} />
              </Grid>
            ))
          ) : (
            <div>Loading</div>
          )}
        </Grid>
      ) : (
        <div>Technical Error Occured</div>
      )}
    </>
  );
};

export default MenuCategoriesConainer;
