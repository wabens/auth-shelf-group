import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* postItem (action) {
  try {
    // passes the username and password from the payload to the server
    yield axios.post('api/user/register', action.payload);

    // automatically log a user in after registration
    // yield put({ type: 'LOGIN', payload: action.payload });
  } catch (error) {
      console.log('Error with posting new item :', error);
    // yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* postItemSaga() {
  yield takeLatest('POST_ITEM', postItem);
}

export default postItemSaga;
