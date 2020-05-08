import {FETCH_APPS_FAILURE, FETCH_APPS_REQUEST, FETCH_APPS_SUCCESS, SELECT_APP} from "./actions/apps";

export const initialState = {
  apps: [],
  selected: 0,
  loading: false,
  error: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_APPS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_APPS_SUCCESS:
      return {
        ...state,
        apps: action.payload,
        loading: false,
        error: '',
        selected: 0,
      };
    case FETCH_APPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'An error occurred',
      };
    case SELECT_APP:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
