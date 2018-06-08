import createReducer from '../utils/index';

import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_CACHE_REQUEST,
  GET_CACHE_FAILURE,
  GET_CACHE_SUCCESS,
  QUERY,
} from '../constants/searchConstants.js';

const initialState = {
  result: undefined,
  cache: [],
  status: '',
  statusText: '',
  query: '',
};
export default createReducer(initialState, {
  [GET_SEARCH_SUCCESS]: (state, payload) => Object.assign({}, state, {
    result: payload,
  }),
  [GET_SEARCH_FAILURE]: (state, payload) => Object.assign({}, state, {
    status: payload.status,
    statusText: payload.statusText,
  }),
  [GET_SEARCH_REQUEST]: (state, payload) => Object.assign({}, state, {
    status: 'Идет поиск информации',
  }),
  [GET_CACHE_SUCCESS]: (state, payload) => Object.assign({}, state, {
    cache: payload,
  }),
  [GET_CACHE_FAILURE]: (state, payload) => Object.assign({}, state, {
    status: payload.status,
    statusText: payload.statusText,
  }),
  [GET_CACHE_REQUEST]: (state, payload) => Object.assign({}, state, {
    status: 'Идет поиск информации',
  }),

  [QUERY]: (state, payload) => {
    return Object.assign({}, state, { query: payload });
  },
})