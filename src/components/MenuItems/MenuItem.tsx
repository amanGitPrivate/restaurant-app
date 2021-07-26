import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { getItemIndex } from "../../utils";
import {
  menuItem,
  selected,
  handleSelectedItems,
} from "../../common.interface";

import AddRemoveMenuItem from "../AddRemoveMenuItem";
import { StyledMenuTitle } from "./MenuItems.styled";

type orderItem = {
  handleItems: (select: handleSelectedItems) => void;
  selectedItems: selected[];
} & menuItem;

const OrderItem = ({
  id,
  name,
  img_url,
  description,
  allergens = [],
  price,
  handleItems,
  selectedItems,
}: orderItem) => {
  const isSelected = getItemIndex(selectedItems, id) > -1;
  return (
    <Box
      borderColor={isSelected ? "#9e9595" : "transparent"}
      border={2}
      borderRadius={4}
    >
      <Card>
        <Box>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            title={name}
            src={img_url}
          />
          <CardContent>
            <StyledMenuTitle>{name}</StyledMenuTitle>
            <Typography component="p">{description}</Typography>
            <Typography component="p">
              {allergens.length ? (
                <Typography component="span">
                  Allergies: {allergens.map((allergy: any) => `${allergy} `)}
                </Typography>
              ) : null}
              <Typography style={{ fontWeight: 600 }} component="span">
                {`€ ${price}`}
              </Typography>
            </Typography>
          </CardContent>
          <AddRemoveMenuItem
            selectedItems={selectedItems}
            id={id}
            price={price}
            name={name}
            addRemoveMenuItems={handleItems}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default OrderItem;
