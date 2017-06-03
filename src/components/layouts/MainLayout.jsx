import React, { PropTypes } from 'react';

import Header from 'components/ui/Header';

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

