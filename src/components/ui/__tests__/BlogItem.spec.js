import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BlogItem from '../BlogItem';
import LikeContainer from 'components/containers/LikeContainer';
import TextBox from 'components/ui/TextBox';

describe('BlogItem', () => {
  it('renders withour crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogItem />, div);
  });

  describe('render', () => {
    it('should render post text', () => {
      const itemProps = {
        text: 'Text for blogpost',
        id: 4,
        postUrl: 'localhost:9090/posts/4'
      };

      const item = shallow(<BlogItem post={itemProps} />);
      const description = <TextBox>Text for blogpost</TextBox>;

      expect(item.contains(description)).toEqual(true);
    });

    it('should render usual blog item', () => {
      const itemProps = {
        text: 'Text for blogpost',
        id: 4,
        postUrl: 'localhost:9090/posts/4',
        image: {
          src: '/pictures/picture1.jpg',
          alt: 'Who cares',
          style: {
            width: 200,
            height:200
          }
        }
      };

      const item = shallow(<BlogItem post={itemProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});

