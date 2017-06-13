import React from 'react';
import PropTypes from 'prop-types';

import ApplicationRouter from 'routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <ApplicationRouter />
      </MuiThemeProvider>
    );
  }
}

export default App;

App.propTypes = {
  match: PropTypes.string
};

