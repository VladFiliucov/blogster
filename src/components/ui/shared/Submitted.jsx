import React from 'react';

import Paper from 'material-ui/Paper';
import styles from 'components/ui/shared/contactStyles';

const Submitted = () => (
  <div style={styles.submitMessageContainer}>
    <Paper zDepth={4}>
      <h1>Thank you for contacting us! Your call is very important to us!</h1>
    </Paper>
  </div>
);

export default Submitted;
