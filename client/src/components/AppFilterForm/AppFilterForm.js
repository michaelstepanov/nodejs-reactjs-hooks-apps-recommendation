import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import AppSelect from "../form/AppSelect";
import AppFormGroup from "../form/AppFormGroup";
import AppDatePicker from "../form/AppDatePicker";

const AppFilterForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    ratingOptions,
    categoryOptions,
    openBirthdateToDate,
    handleBirthdateChange,
    handleCategoriesChange,
    handleRatingGteChange,
  }) => {

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text">
          <form onSubmit={handleSubmit}>

            <AppFormGroup name="birthdate" label="Birthdate" touched={touched} errors={errors} className="required react-datepicker-container"
              render={name => (
                <AppDatePicker
                  name={name}
                  placeholder="Select birthdate"
                  openToDate={openBirthdateToDate}
                  selected={values[name]}
                  onChange={handleBirthdateChange}
                />
              )}
            />

            <AppFormGroup name="category:in" label="Categories" touched={touched} errors={errors} className="required"
              render={name => (
                <AppSelect
                  name={name}
                  placeholder="Select max 3 categories"
                  value={values[name]}
                  onChange={handleCategoriesChange}
                  options={categoryOptions}
                  isMulti={true}
                />
              )}
            />

            <AppFormGroup name="rating:gte" label="Min Rating" touched={touched} errors={errors} className="required"
              render={name => (
                <AppSelect
                  name={name}
                  placeholder="Select min rating"
                  value={values[name]}
                  onChange={handleRatingGteChange}
                  options={ratingOptions}
                />
              )}
            />

            <button
              type="submit"
              data-testid="filter"
              className="btn btn-primary pull-right"
              disabled={isSubmitting}
            >
              Filter
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AppFilterForm;
