import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
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
      error: "omg"
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState(
      set(
        assign({}, this.state),
        'form.values.fullName',
        e.target.value
      )
    );
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <form>
          <div>
            <TextField
              value={this.state.form.values.fullName}
              onChange={this.onChange}
              errorText={this.state.error}
              floatingLabelText="Your name"
            />
          </div>
        </form>
      </div>
    );
  }
}

