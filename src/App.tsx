import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuCategories from "./components/MenuCategories";
import MenuItems from "./components/MenuItems";
import Checkout from "./components/Checkout";
import CheckoutMobile from "./components/CheckoutMobileFooter";
import Header from "./components/Header";

import {
  StyledApp,
  StyledContaniner,
  StyledCheckoutContainer,
  StyledMenuContainer,
} from "./App.styled";

import { createGlobalStyle } from "styled-components";

import { selected, handleSelectedItems } from "./common.interface";
import { getItemIndex } from "./utils";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f5f2
  }
  `;

const App = () => {
  const [selectedItems, updateSelectedItems] = useState<selected[]>([]);

  const handleItems = ({ id, price, name, action }: handleSelectedItems) => {
    let selectedItemsList = [...selectedItems];

    let index = getItemIndex(selectedItems, id);
    if (action === "add") {
      selectedItemsList.push({ id, price, name });
      updateSelectedItems(selectedItemsList);
      return;
    } else if (index !== -1 && selectedItemsList[index].name === name) {
      selectedItemsList.splice(index, 1);
      updateSelectedItems(selectedItemsList);
      return;
    }
  };

  const clearSelection = () => {
    updateSelectedItems([]);
  };
  return (
    <StyledApp>
      <GlobalStyle />
      <Router>
        <Header />
        <StyledContaniner>
          <StyledMenuContainer>
            <div>
              <Switch>
                <Route exact path="/">
                  <MenuCategories />
                </Route>
                <Route exact path={`/category/:categoryId`}>
                  <MenuItems
                    handleItems={handleItems}
                    selectedItems={selectedItems}
                  />
                </Route>
                <Route exact path={`/checkout`}>
                  {/* the hidden checkout route to show in mobile */}
                  <Checkout
                    clearSelection={clearSelection}
                    handleItems={handleItems}
                    selectedItems={selectedItems}
                  />
                </Route>
              </Switch>
            </div>
          </StyledMenuContainer>
          <StyledCheckoutContainer>
            {/* the checkout on side navigation */}
            <Checkout
              clearSelection={clearSelection}
              handleItems={handleItems}
              selectedItems={selectedItems}
            />
          </StyledCheckoutContainer>
          {/* the checkout footer on mobile */}
          <CheckoutMobile selectedItems={selectedItems} />
        </StyledContaniner>
      </Router>
    </StyledApp>
  );
};

export default App;
