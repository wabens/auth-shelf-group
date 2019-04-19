import React, { Component } from 'react';
import { connect } from 'react-redux';
import redux from 'redux';


class UserInfo extends Component {


  render() {
    return (
      <section>
         
      </section>
    );
  }

}

const mapReduxState = (reduxState) => ({
  reduxState
});

export default connect(mapReduxState)(UserInfo);
