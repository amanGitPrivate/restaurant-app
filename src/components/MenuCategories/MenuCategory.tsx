import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import { category } from "../../common.interface";

const MenuCategory = ({ id, name }: category) => {
  const history = useHistory();

  const openCategories = () => {
    history.push(`/category/${id}`);
  };

  const defaultMenuImages =
    "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70";
  return (
    <Card>
      <CardActionArea onClick={openCategories}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          title={name}
          src={defaultMenuImages}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuCategory;
