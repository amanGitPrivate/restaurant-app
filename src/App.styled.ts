import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  @media (max-width: 768px) {
    margin: 10px auto;
  }
`;

export const StyledContaniner = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledCheckoutContainer = styled.div`
  width: 20%;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 30%);
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMenuContainer = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;
