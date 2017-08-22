export default function validate(values) {
  const errors = {};

  if (values.text.length < 5)
    errors.text = 'Text have to be at least 5 chars';

  return errors;
}

