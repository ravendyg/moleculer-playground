// @ts-check
import React from 'react';
import { Contact } from '../components/Contact';

export function Table({ contacts }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </tbody>
    </table>
  )
}
