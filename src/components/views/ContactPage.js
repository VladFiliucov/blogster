import React from 'react';
import Helmet from 'react-helmet';

import Contact from 'components/ui/shared/Contact';

const ContactPage = () => (
  <div>
    <Contact />
    <Helmet title='Contact Page' />
  </div>
);

export default ContactPage;
