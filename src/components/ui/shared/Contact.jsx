import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import {orange500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

import { set, assign } from 'lodash/object';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  formContainer: {
    width: '40%',
    textAlign: 'center',
    margin: '0 auto'
  },
  contactForm: {
    paddingBottom: '4%'
  }
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleChange(e) {
    this.setState(set(
      assign({}, this.state),
      `form.values.${e.target.name}`,
      e.target.value
    ));

    if (!this.state.form.values[e.target.name]) {
      this.setState(set(
        assign({}, this.state),
        `errors.values.${e.target.name}`,
        "Can't be blank"
      ));
    } else {
      this.setState(set(
        assign({}, this.state),
        `errors.values.${e.target.name}`,
        ''
      ));
    }

  }

  render() {
    return (
      <div style={styles.formContainer}>
        <h1>Contact Us</h1>
        <Paper zDepth={4}>
          <form style={styles.contactForm}>
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
          </form>
      </Paper>
      </div>
    );
  }
}

