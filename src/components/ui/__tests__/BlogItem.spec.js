import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BlogItem from '../BlogItem';
import LikeContainer from 'components/containers/LikeContainer';
import 'components/styles/blog/BlogItem.css'

describe('BlogItem', () => {
  it('renders withour crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogItem />, div);
  });
});

