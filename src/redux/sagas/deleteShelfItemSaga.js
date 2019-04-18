import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteShelfItem(action) {
    try {
        let itemId = action.payload
        yield axios.delete(`/api/shelf/${itemId}`);
        yield put({ type: 'GET_SHELF'})
    }
    catch (error) {
        console.log(`Couldn't delete shelf items`);
    }
}

function* deleteShelfItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteShelfItem);
}

export default deleteShelfItemSaga;