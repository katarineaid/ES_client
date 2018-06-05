import createReducer from '../utils/index';

import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
} from '../constants/searchConstants.js';

const initialState = {
  result:[],
  status:'',
  statusText:'',
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
})