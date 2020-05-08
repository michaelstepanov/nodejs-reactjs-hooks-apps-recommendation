import React, {useEffect, useState} from 'react';
import {useFormikContext} from "formik";

const AutoSubmitForm = () => {
  const {values, errors, submitForm} = useFormikContext();

  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log(errors); // TODO Remove

  useEffect(() => {
    // If form is valid and not submitted
    // TODO If not touched and not submitted - submit
    if (!formSubmitted && Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      submitForm();
    }
  }, [values, submitForm]);

  return null;
};

export default AutoSubmitForm;
