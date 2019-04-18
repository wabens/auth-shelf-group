import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* getShelf() {
    try {
      const response = yield axios.get('/api/shelf');
      yield put({ type: 'SET_SHELF', payload: response.data})
    }
    catch (error) {
      console.log(`Couldn't get shelf items`);
    }
}

function* getShelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
  }

export default getShelfSaga;