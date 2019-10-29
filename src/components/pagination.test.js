import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { assert } from 'chai';

import { Pagination } from './Pagination';

it('renders page counter', () => {
  const props = {
    page: 0,
  };
  const { getByText } = render(
    <Pagination {...props}/>
  );
  getByText('1');
});

it('renders previous link if page > 0', () => {
  const props = {
    page: 1,
  };
  const { getByText } = render(
    <Pagination {...props}/>
  );
  getByText('previous');
});

it('renders next link if hasNext === true', () => {
  const props = {
    page: 1,
    hasNext: true,
  };
  const { getByText } = render(
    <Pagination {...props}/>
  );
  getByText('next');
});

it('emits setPage on "next" click', (done) => {
  const props = {
    page: 1,
    hasNext: true,
    // no sinon here
    setPage(val) {
      assert.equal(val, props.page + 1);
      done();
    },
  };
  const { getByText } = render(
    <Pagination {...props}/>
  );
  fireEvent(
    getByText('next'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
});
