import { Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import {
  StyledCheckoutFooter,
  StyledItemsDetails,
  StyledItemsCount,
} from "./CheckoutMobile.styled";

import { selected } from "../../common.interface";
import { getTotal } from "../../utils";

interface checkout {
  selectedItems: selected[];
}
const CheckoutMobile = ({ selectedItems }: checkout) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const openCheckout = () => {
    history.push(`/checkout`);
  };

  return (
    <StyledCheckoutFooter>
      {pathname !== "/checkout" && (
        <>
          <StyledItemsCount>{selectedItems.length}</StyledItemsCount>
          <Button
            onClick={openCheckout}
            variant="contained"
            color="primary"
            fullWidth
          >
            <div>
              {`Checkout`}
              <StyledItemsDetails>
                {`(€${getTotal(selectedItems)})`}
              </StyledItemsDetails>
            </div>
          </Button>
        </>
      )}
    </StyledCheckoutFooter>
  );
};

export default CheckoutMobile;
