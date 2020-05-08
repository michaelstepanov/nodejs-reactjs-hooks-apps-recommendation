import React, {useEffect, useState, useContext} from 'react';
import appApi from '../../apis/appApi';
import "react-datepicker/dist/react-datepicker.css";
import {fromOptions} from "../../helpers/common";
import {fetchAppsRequest, fetchAppsSuccess, fetchAppsFailure} from "../../actions/apps";
import {GlobalContext} from "../../contexts/GlobalState";
import queryString from 'query-string';
import moment from 'moment';
import * as yup from 'yup';
import {Formik} from "formik";
import AppFilterForm from "./AppFilterForm";
import AutoSubmitForm from "../common/AutoSubmitForm";
import SetUrlQuery from "../common/SetUrlQuery";

// Amount of categories allowed to select
const MAX_SELECTED_CATEGORIES = 3;
// Initial birthdate
const openBirthdateToDate = new Date(new Date().setDate(new Date().getDate() - 30 * 12 * 30)); // 30 years ago
// Get initial params from url query
const params = queryString.parse(window.location.search.substring(1), {arrayFormat: 'bracket'});
// Set initial values
const INITIAL_VALUES = {
  birthdate: params.birthdate || '',
  'category:in': params['category:in'] || [],
  'rating:gte': params['rating:gte'] || '',
};
// Validation rules
const validationSchema = yup.object().shape({
  birthdate: yup.date().required('The field is required.'),
  'category:in': yup.array().required('The field is required.'),
  'rating:gte': yup.number().required('The field is required.'),
});

const AppFilterFormContainer = () => {
  const ratingOptions = [1, 2, 3, 4, 5];
  const {dispatch} = useContext(GlobalContext);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    appApi.get('categories')
      .then(res => setCategoryOptions(res.data))
      .catch(e => console.error(e));
  }, []);

  const handleSubmit = async (values, {setSubmitting}) => {
    try {
      setSubmitting(true);

      dispatch(fetchAppsRequest());
      // Fetch Apps
      const res = await appApi.get('apps', values);
      dispatch(fetchAppsSuccess(res.data));
    } catch (e) {
      dispatch(fetchAppsFailure());
    } finally {
      setSubmitting(false);
    }
  };

  const handleBirthdateChange = (date, setFieldValue) => {
    const birthdate = date ? moment(date).format('YYYY-MM-DD') : '';
    setFieldValue('birthdate', birthdate);
  };

  const handleCategoriesChange = (categories, setFieldValue) => {
    // Don't add more then MAX_SELECTED_CATEGORIES
    const fieldName = 'category:in';
    if (categories === null) {
      setFieldValue(fieldName, []);
    } else if (!categories || categories.length <= MAX_SELECTED_CATEGORIES) {
      setFieldValue(fieldName, fromOptions(categories));
    }
  };

  const handleRatingGteChange = (rating_gte, setFieldValue) => {
    setFieldValue('rating:gte', fromOptions(rating_gte));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <>
          <AppFilterForm
            {...props}
            ratingOptions={ratingOptions}
            categoryOptions={categoryOptions}
            openBirthdateToDate={openBirthdateToDate}
            handleBirthdateChange={date => {handleBirthdateChange(date, props.setFieldValue)}}
            handleCategoriesChange={categories => {handleCategoriesChange(categories, props.setFieldValue)}}
            handleRatingGteChange={rating_gte => {handleRatingGteChange(rating_gte, props.setFieldValue)}}
          />

          <SetUrlQuery values={props.values} />

          <AutoSubmitForm />
        </>
      )}
    </Formik>
  );
};

export default AppFilterFormContainer;
