import React from 'react';
import "react-datepicker/dist/react-datepicker.css";

const AppFormGroup = ({name, label, touched, errors, className, render}) => (
  <div className={"form-group " + className + (touched[name] && errors[name] ? ' has-error' : '')}>
    <label htmlFor={name} className="control-label">{label}</label>
    {render(name)}
    <small className="form-text validation-message">{errors[name]}</small>
  </div>
);

export default AppFormGroup;
