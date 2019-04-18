import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* postItem (action) {
  try {
    console.log(`postItem action `,action.payload);
    
    yield axios.post('api/shelf', action.payload);

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
