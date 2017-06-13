import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from 'store';
import ApplicationRouter from 'routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <ApplicationRouter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

App.propTypes = {
  match: PropTypes.string
};

