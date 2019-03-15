import axios from 'axios'

import { call, put, takeLatest } from 'redux-saga/effects'

// test
export function* watcherSaga(){
    yield takeLatest("GET_CONTENT_REQUEST", workerSaga)
}

function axiosGetContent() {
    setTimeout(
        function () {
            return axios({
                method: "get",
                url: 'https://jsonplaceholder.typicode.com/posts'
            })
        },
        10000
    )
    
}

export function* workerSaga() {
    try {
        const response = yield call(axiosGetContent);
        const content = JSON.stringify(response);
        // dispatch a success action to the store with the new dog
        yield put({ type: "GET_CONTENT_SUCCESS", content });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "GET_CONTENT_ERROR", error });
    }
}


