import axios from "axios";

import { call, put, take, race, cancelled } from "redux-saga/effects";

// watcher saga
export function* watcherSaga() {
    while (true) {
        yield take("GET_CONTENT_REQUEST");
        yield race([call(workerSaga), take("CANCEL_REQUEST")]);
    }
}

// delay function
function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// axios request function
function axiosGetContent() {
    return delay(5000).then(() => {
        return axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts"
        });
    });
}

// worker saga
export function* workerSaga() {
    try {
        const response = yield call(axiosGetContent);
        const content = JSON.stringify(response);

        // dispatch a success action to the store with new content
        yield put({ type: "GET_CONTENT_SUCCESS", content });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "GET_CONTENT_ERROR", error });
    }
}
