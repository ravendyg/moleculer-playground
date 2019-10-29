import React from 'react';

export function Contact(props) {
  const {
    name,
    email,
  } = props.contact;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  )
}
