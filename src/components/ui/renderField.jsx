import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
  </div>
);

export default renderField;
