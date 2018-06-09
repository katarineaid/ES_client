import createReducer from '../utils/index';

import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_CACHE_REQUEST,
  GET_CACHE_FAILURE,
  GET_CACHE_SUCCESS,
  QUERY,
  GET_RESULT_GROUPING,
} from '../constants/searchConstants.js';

const initialState = {
  result: undefined,
  cache: [],
  status: '',
  statusText: '',
  query: '',
  grouped:[],
  searchResult:[],
};
export default createReducer(initialState, {
  [GET_SEARCH_SUCCESS]: (state, payload) => Object.assign({}, state, {
    searchResult:payload,
    result: payload.data,
    grouped: payload.grouped,
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
  [GET_RESULT_GROUPING]: (state, payload) => {
    if(state.grouped.hasOwnProperty(payload)){
      return Object.assign({}, state, { result: state.grouped[payload].data });
    }else if (payload==='all'){
      return Object.assign({}, state, { result: state.searchResult.data });
    }else{
      return Object.assign({}, state, { result: [] });
    }

  },
})