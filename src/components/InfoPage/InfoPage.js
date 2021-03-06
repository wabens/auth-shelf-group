import React from 'react';
import ShelfList from '../ShelfList/ShelfList';
import ItemForm from "../ItemForm/ItemForm"; 
import UserInfo from "../UserInfo/UserInfo";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h1>Item Shelf</h1>
      <ItemForm /> 
      <UserInfo />
      <ShelfList />

  </div>
);

export default InfoPage;
