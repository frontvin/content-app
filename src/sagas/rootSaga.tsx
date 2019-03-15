import axios from 'axios'

import { call, put, takeLatest } from 'redux-saga/effects'

// test
export function* watcherSaga(){
    yield takeLatest("GET_CONTENT_REQUEST", workerSaga)
}

function delay(ms : number) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() } , ms)
    })
}

function axiosGetContent() {
    return delay(5000).then(() => {
        return axios({
            method: "get",
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
    })
}

export function* workerSaga() {
    try {
        const response = yield call(axiosGetContent);
        const content = JSON.stringify(response);
        console.log(content)
        // dispatch a success action to the store with the new dog
        yield put({ type: "GET_CONTENT_SUCCESS", content });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "GET_CONTENT_ERROR", error });
    }
}


