import { takeEvery, call } from 'redux-saga/effects';
import { ADD_USER_DATA } from '../actions/actions';

const APISendData = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 500);
    })
};


function* handleFormSubmit () {
    yield call(APISendData);
}


function* rootSaga() {
    yield takeEvery(ADD_USER_DATA, handleFormSubmit);
}

export default rootSaga;
