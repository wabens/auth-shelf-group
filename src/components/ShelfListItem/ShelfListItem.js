import React from 'react';
import { connect } from 'react-redux';

const ShelfListItem = (props) => (
  <div className="shelf-item">
      {/* {JSON.stringify(props.item.id)} */}
      <img src={props.item.image_url} alt={props.item.description}/>
      <p>{props.item.description}</p>
      <button onClick={() => props.dispatch({ type: 'DELETE_ITEM', payload: props.item.id })}>Delete</button>
  </div>
);



export default connect()(ShelfListItem);