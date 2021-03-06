import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Submitted from 'components/ui/shared/Submitted';

import styles from 'components/ui/shared/contactStyles';

import { set, assign, mapKeys } from 'lodash/object';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        }
      },
      errors: {
        values: {
          fullName: '',
          email: '',
          message: ''
        }
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.submitSuccess = this.submitSuccess.bind(this)
  }

  validateForm(e) {
    if (!this.state.form.values[e.target.name]) {
      this.setState(set(
        assign({}, this.state),
        `errors.values.${e.target.name}`,
        'Can not be blank'
      ));
    } else {
      this.setState(set(
        assign({}, this.state),
        `errors.values.${e.target.name}`,
        ''
      ));
    }
  }

  handleChange(e) {
    this.setState(set(
      assign({}, this.state),
      `form.values.${e.target.name}`,
      e.target.value
    ));
    this.validateForm(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    let hasErrors = false;

    mapKeys(this.state.form.values, (value, key) => {
      if (!value.length) {
        this.setState(set(
          assign({}, this.state),
          `errors.values.${key}`,
          'Can not be blank'
        ));
        hasErrors = true
      }
    });

    !hasErrors && this.submitSuccess();
  }

  submitSuccess() {
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div style={styles.formContainer}>
        { this.state.submitted
          ? <Submitted />
          : <div>
            <h1>Contact Us</h1>
            <Paper zDepth={4}>
              <form style={styles.contactForm} onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    name={'fullName'}
                    value={this.state.form.values.fullName}
                    onChange={this.handleChange}
                    errorText={this.state.errors.values.fullName}
                    hintText="Your name"
                    floatingLabelText="Your name"
                  />
                </div>
                <div>
                  <TextField
                    name={'email'}
                    value={this.state.form.values.email}
                    onChange={this.handleChange}
                    errorText={this.state.errors.values.email}
                    hintText="Your email"
                  />
                </div>
                <div>
                  <TextField
                    name={'message'}
                    value={this.state.form.values.message}
                    onChange={this.handleChange}
                    errorText={this.state.errors.values.message}
                    hintText="Message"
                    multiLine={true}
                  />
                </div>
                <RaisedButton
                  style={styles.submitButton}
                  backgroundColor="#3db5da"
                  label="Send"
                  type="submit"
                />
              </form>
            </Paper>
          </div>
        }
      </div>
    );
  }
}

