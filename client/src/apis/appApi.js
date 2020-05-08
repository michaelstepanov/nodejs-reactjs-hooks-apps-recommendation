import axios from 'axios';
import {stringifyQueryString} from "../helpers/common";

const URL = 'http://localhost:3001/api/v1/';

export default {
  get: (path, params) => {
    return params ?
      axios.get(URL + path + `?${stringifyQueryString(params)}`) :
      axios.get(URL + path);
  }
}
