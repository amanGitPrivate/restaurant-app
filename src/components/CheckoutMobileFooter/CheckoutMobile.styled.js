import styled from "styled-components";

export const StyledCheckoutFooter = styled.div`
  margin-top: 30px;
  display: none;
  padding: 0px 10px;
  position: relative;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledItemsDetails = styled.span`
  font-size: 12px;
`;

export const StyledItemsCount = styled.span`
  position: absolute;
  right: 15px;
  z-index: 10;
  top: -8px;
  background-color: #ff8000;
  border-radius: 50%;
  padding: 4px;
  color: white;
  height: 20px;
  width: 20px;
  text-align: center;
`;
