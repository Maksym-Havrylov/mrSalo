import React from "react";
import styled from "styled-components";
import trashImg from "../../img/trash.svg";

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-aligh: right;
`;

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background: cover;
  background-size: no-repeat;
  cursor: pointer;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <ItemName>2</ItemName>
    <ItemPrice>{order.price.toLocaleString('en-UA',
          {style: 'currency', currency: 'UAH'})}</ItemPrice>
    <TrashButton/>
  </OrderItemStyled>
);