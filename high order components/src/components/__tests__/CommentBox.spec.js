import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('Has a textarea and a 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});


describe('<CommentBox />', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { target: { value: 'New Comment'}});
    wrapper.update();
  });

  it('accepts input from user', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('New Comment');
  });

  it('Clears textarea after submitting form', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('New Comment');
    wrapper.find('form').simulate('submit');
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('');

  });

});
