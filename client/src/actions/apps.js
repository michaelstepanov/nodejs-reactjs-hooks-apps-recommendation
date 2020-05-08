export const FETCH_APPS_REQUEST = 'FETCH_APPS_REQUEST';
export const FETCH_APPS_SUCCESS = 'FETCH_APPS_SUCCESS';
export const FETCH_APPS_FAILURE = 'FETCH_APPS_FAILURE';
export const SELECT_APP = 'SELECT_APP';

export const fetchAppsRequest = () => ({type: FETCH_APPS_REQUEST});
export const fetchAppsSuccess = apps => ({type: FETCH_APPS_SUCCESS, payload: apps});
export const fetchAppsFailure = () => ({type: FETCH_APPS_FAILURE});
export const selectApp = index => ({type: SELECT_APP, payload: index});
