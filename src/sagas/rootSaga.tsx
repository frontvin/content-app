import axios from "axios";
import { axiosGetContentAction } from '../actions/actions';
import { call, put, take, race } from "redux-saga/effects";

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
    return delay(2000).then(() => {
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
        yield put(axiosGetContentAction.success(content));
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(axiosGetContentAction.failure(error));
    }
}
