import React, {useEffect} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import queryString from 'query-string';

const SetUrlQuery = ({values}) => {
  useEffect(() => {
    window.history.replaceState(null, null, '?' + queryString.stringify(values, {arrayFormat: 'bracket'}));
  }, [values]);

  return null;
};

export default SetUrlQuery;
