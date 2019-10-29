import React from 'react';
import { render } from '@testing-library/react';

import { Contact } from './Contact';

it('renders table row', () => {
  const contact = {
    name: 'name',
    email: 'email',
  };
  const { getByText } = render(
    <table><tbody>
      <Contact contact={contact}/>
    </tbody></table>
  );
  getByText(contact.name);
  getByText(contact.email);
});
