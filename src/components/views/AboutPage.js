import React from 'react';
import Helmet from 'react-helmet';

import About from 'components/ui/shared/About';

const AboutPage = () => (
  <div>
    <About />
    <Helmet title='About Page' />
  </div>
);

export default AboutPage;
