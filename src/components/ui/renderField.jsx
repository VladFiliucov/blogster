import React from 'react';

import TextField from 'material-ui/TextField'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
    />
  </div>
);

export default renderField;
