import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* getUsers() {
    try {
      const response = yield axios.get('/api/shelf/count');
      yield put({ type: 'SET_USER_INFO', payload: response.data})
    }
    catch (error) {
      console.log(`Couldn't get shelf items`);
    }
}

function* getUsersSaga() {
    yield takeLatest('GET_USER_INFO', getUsers);
  }

export default getUsersSaga;