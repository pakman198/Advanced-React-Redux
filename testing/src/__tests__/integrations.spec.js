import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1' },
      { name: 'Fetched #2' },
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// all the code from the it function gets ran and jest returns a boolean
// but when working with requests, you can use a callback (done) to tell
// jest that you finished your test

it('can fetch alist of comments and display them', (done) => {
  // attempt to render the entire App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetch comments button and click it
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find('li').length).toEqual(2);

    done();

    wrapper.unmount();
  });
});
