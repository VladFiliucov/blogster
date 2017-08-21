import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
  </div>
);

const BlogEditForm = ({ handleSubmit }) => (
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
  onSubmit: (values) => alert(JSON.stringify(values))
})(BlogEditForm));

