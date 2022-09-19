import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-beatween;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin: 30px 30px 0 0;
  padding: 15px;
  font-size: 26px;
  color: white;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 20px 10px rgba(0,0,0,.5);
    box-shadow: 0px 0px 14px 4px rgba(0,0,0,.5);
    opacity: 90%;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({itemList, setOpenItem}) => (
  <List>
    {itemList.map(item => (
      <Item
        key={item.id}
        img={item.img}
        onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('en-UA',
          {style: 'currency', currency: 'UAH'})}
        </p>
      </Item>
    ))}
  </List>
); 