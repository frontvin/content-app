import { createStore } from 'redux';
import { contentReducer } from '../reducers/contentReducer';

export const store = createStore(contentReducer);
