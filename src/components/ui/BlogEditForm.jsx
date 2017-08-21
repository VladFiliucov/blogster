import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

const BlogEditForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit} >
      <label htmlFor='text'>Text</label>
      <Field component='input' type='text' name='text' className='ui input' />
      <RaisedButton
        label="Update"
        type="submit"
      />
    </form>
  </div>
)

export default reduxForm({ form: 'editPost' })(BlogEditForm);

