import { StyledRestaurantHeader } from "./Header.styled";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <StyledRestaurantHeader>
      <span color="primary" onClick={() => history.goBack()}>
        {`${"<"}  `}
      </span>

      {"Restaurant Menu"}
    </StyledRestaurantHeader>
  );
};

export default Header;
