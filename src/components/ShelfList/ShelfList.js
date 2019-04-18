import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfListItem from '../ShelfListItem/ShelfListItem';

class ShelfList extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_SHELF' })
  }

  render() {
    return (
      <div>
        <h2>Atbash Shelf</h2>
        {this.props.reduxState.shelfList.map( item => {
          return <ShelfListItem item={item}/>
        })}   
      </div>
    )
  };
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ShelfList);