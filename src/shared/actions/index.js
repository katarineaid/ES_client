import api from '../api/index';
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_CACHE_REQUEST,
  GET_CACHE_FAILURE,
  GET_CACHE_SUCCESS,
  QUERY,
  GET_RESULT_GROUPING,
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
    const params = regExp(query);
    return api.search.search(params).then((response) => {
      const responseData = response.data;
      if (responseData.status) {
        const searchData = responseData;
        dispatch(getSearchSuccess(searchData));
        return searchData;
      }
      dispatch(getSearchFailure(responseData.statusText));
    }).catch(error => dispatch(getSearchFailure(error)));
  };
}

function getCacheSuccess(data) {
  return {
    type: GET_CACHE_SUCCESS,
    payload: data,
  };
}

function getCacheRequest() {
  return {
    type: GET_CACHE_REQUEST,
  };
}

function getCacheFailure(data) {
  return {
    type: GET_CACHE_FAILURE,
    payload: data,
  };
}

export function getCache(query) {
  return (dispatch) => {
    dispatch(getCacheRequest());
    const params = regExp(query);
    return api.search.cache(params).then((response) => {
      const responseData = response.data;
      if (responseData.status) {
        const cacheData = responseData.data;
        dispatch(getCacheSuccess(cacheData));
        return cacheData;
      }
      dispatch(getCacheFailure(responseData.statusText));
    }).catch(error => dispatch(getCacheFailure(error)));
  };
}

export function giveQuery(data) {
  return {
    type: QUERY,
    payload: data,
  };
}

function regExp(query) {
  let reg = /[&\/\\#,+()$~%.'"*?<>{}№;^!]/g;
  let cleanQuery = query.replace(reg, '');
  return cleanQuery.trim();
}

export function getResultGrouping(data) {
  return{
    type: GET_RESULT_GROUPING,
    payload: data,
  }
}