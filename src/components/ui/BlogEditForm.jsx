import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

const BlogEditForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='text'>Text</label>
        <Field component='input' type='text' name='text' className='ui input' />
      </div>
      <div>
        <label htmlFor='author'>Author</label>
        <Field component='input' type='text' name='author' className='ui input' />
      </div>
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
      updatedAt: state.post.post.details.updatedAt,
      author: state.post.post.details.author,
    }
  })
)(reduxForm({ form: 'editPost' })(BlogEditForm));

