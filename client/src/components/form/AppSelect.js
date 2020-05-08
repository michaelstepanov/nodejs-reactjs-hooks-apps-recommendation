import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import {toOptions} from "../../helpers/common";

const AppSelect = ({
    name,
    placeholder,
    value,
    onChange,
    options,
    className = "react-select",
    isMulti = false,
    isClearable = true
  }) => (
  <Select
    id={name}
    name={name}
    placeholder={placeholder}
    className={className}
    value={toOptions(value)}
    onChange={onChange}
    options={toOptions(options)}
    isMulti={isMulti}
    isClearable={isClearable}
  />
);

export default AppSelect;
