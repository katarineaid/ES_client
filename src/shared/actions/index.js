import api from '../api/index';
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
} from '../constants/searchConstants';

function getSearchSuccess(data) {
  return {
    type: GET_SEARCH_SUCCESS,
    payload: data,
  };
}

function getSearchRequest() {
  return {
    type: GET_SEARCH_REQUEST,
  };
}

function getSearchFailure(data) {
  return {
    type: GET_SEARCH_FAILURE,
    payload: data,
  };
}

export function getSearch(query) {
  return (dispatch) => {
    dispatch(getSearchRequest());
    const params = query;
    return api.search.search(params).then((response) => {
      const responseData = response.data;
      if (responseData.status) {
        const searchData = responseData.data;
        dispatch(getSearchSuccess(searchData));
        return searchData;
      }
      dispatch(getSearchFailure(responseData.statusText));
    }).catch(error => dispatch(getSearchFailure(error)));
  };
}