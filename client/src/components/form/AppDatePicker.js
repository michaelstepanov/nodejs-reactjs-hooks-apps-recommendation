import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import DatePicker from "react-datepicker";

const AppDatePicker = ({
    name,
    selected,
    onChange,
    placeholder,
    openToDate,
    className = "form-control",
    dateFormat = "yyyy-MM-dd",
    autoComplete = "off",
    showYearDropdown = true,
  }) => (
  <DatePicker
    id={name}
    name={name}
    autoComplete={autoComplete}
    placeholderText={placeholder}
    openToDate={openToDate}
    className={className}
    dateFormat={dateFormat}
    showYearDropdown={showYearDropdown}
    selected={selected ? moment(selected).toDate() : ''}
    onChange={onChange}
  />
);

export default AppDatePicker;
