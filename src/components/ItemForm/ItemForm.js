import React, { Component } from 'react';
import { connect } from 'react-redux';
import redux from 'redux';


class ItemForm extends Component {

    state = {
        newItem : {
            description: '',
            image_url: '',
            user_id: this.props.reduxState.user.id,
            } // end newItem 
        } // end state  

    submitNewItem = (event) => {
        event.preventDefault();
        console.log(`Add Item button clicked!  `);
        console.log(`state on submit: `, this.state.newItem);

        // dispatch straight to postItemSaga
        this.props.dispatch({ type: 'POST_ITEM', payload: this.state.newItem })
        this.setState({ 
            newItem: {
                description: '',
                image_url: ''
            } // end newItem 
        })
    }

    handleChange = (event) => {
        console.log(`name is`, event.target.name);
        console.log(`value is`, event.target.value)
        this.setState({ 
            newItem: {
            ...this.state.newItem,
            [event.target.name]: event.target.value, 
            } // end newItem 
        })
    }

  render() {
    return (
      <div>
          <form onSubmit={this.submitNewItem}>
              <input placeholder="description" value={this.state.newItem.description} onChange={this.handleChange} name="description"/> 
              <input placeholder="image URL" value={this.state.newItem.image_url} onChange={this.handleChange} name="image_url"/> 
              <button type="submit" > Add Item  </button>

              {/* uncomment to test reduxState */}
              {/* {JSON.stringify(this.props.reduxState.user.id)} */}
          </form>
      </div>
    );
  }

}

const mapReduxState = (reduxState) => ({
  reduxState
});

export default connect(mapReduxState)(ItemForm);
