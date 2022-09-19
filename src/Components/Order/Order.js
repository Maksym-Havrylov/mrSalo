import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  padding: 20px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0,0,0,.25);
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div`
  display: flex;
  margin: 0 35px 30px 35px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20%;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {
  return (
    <OrderStyled>
      <OrderTitle>Your Order</OrderTitle>
      <OrderContent>
        {orders.length ?
        <OrderList>
          {orders.map(order => <OrderListItem order={order}/>)}
        </OrderList> : 
        <EmptyList>The list of orders is empty</EmptyList>}
      </OrderContent>
      <OrderTotal>
        <span>Total</span>
        <span>5</span>
        <TotalPrice>850 UAH</TotalPrice>
      </OrderTotal>
      <ButtonCheckout>To Order</ButtonCheckout>
    </OrderStyled>
  )
}