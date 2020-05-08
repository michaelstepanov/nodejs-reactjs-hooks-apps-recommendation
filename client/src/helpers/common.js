import queryString from "query-string";

export const toOptions = data => (
  data ?
    Array.isArray(data) ?
      data.map(val => ({
        value: val,
        label: val
      })) :
      {
        value: data,
        label: data
      } :
    ''
);

export const fromOptions = data => (
  data ?
    Array.isArray(data) ?
      data.map(option => option.value) :
      data.value :
    ''
);

export const stringifyQueryString = values => queryString.stringify(values, {arrayFormat: 'bracket'});
