import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

const validate = (values) => {
  const errors = {};

  if (values.text.length < 5)
    errors.text = 'Text have to be at least 5 chars';

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
  </div>
);

const BlogEditForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <form onSubmit={handleSubmit} >
      <Field
        label='Text'
        component={renderField}
        type='text'
        name='text'
      />
      <Field
        label='Author'
        component={renderField}
        type='text'
        name='author'
      />
      {
        !pristine && !submitting &&
          <RaisedButton label="Reset" onClick={reset} />
      }
      <RaisedButton
        label="Update"
        type="submit"
      />
    </form>
  </div>
)

export default connect(
  (state) => ({
    initialValues: {
      text: state.post.post.text,
      author: state.post.post.details.author
    }
  })
)(reduxForm({
  form: 'editPost',
  validate,
  onSubmit: (values) => alert(JSON.stringify(values))
})(BlogEditForm));

