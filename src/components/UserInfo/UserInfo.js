import React, { Component } from 'react';
import { connect } from 'react-redux';
import redux from 'redux';


class UserInfo extends Component {

  componentDidMount = () => {
    this.props.dispatch({type: "GET_USER_INFO"})
  }


  render() {
    return (
      <section>
         <table>
             <thead>
                 <th>User</th>
                 <th>Item Count</th>
             </thead>
             <tbody>
                 {this.props.reduxState.userList.map( userInfo => {
                     return <tr>
                                <td>
                                    {userInfo.username}
                                </td>
                                <td>
                                    {userInfo.count}
                                </td>
                            </tr>
                 })}
             </tbody>
         </table>
      </section>
    );
  }

}

const mapReduxState = (reduxState) => ({
  reduxState
});

export default connect(mapReduxState)(UserInfo);
