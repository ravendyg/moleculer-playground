// @ts-check
import React, {
  useState,
} from 'react';
import {
  useHistory,
} from 'react-router-dom';

import { createContact } from '../api';

function validate(name, email) {
  return name && email;
}

export function CreateContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();
    await createContact(name, email);
    history.goBack();
  }

  function cancel() {
    history.goBack();
  }

  return (
    <div className='page'>
      <form onSubmit={submit}>
        <div className='form-row'>
          <label>
            <span>Name:</span>
            <input
              type='text'
              onChange={({ target }) => setName(target.value)}
            ></input>
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>Email:</span>
            <input
              type='email'
              onChange={({ target }) => setEmail(target.value)}
            ></input>
          </label>
        </div>
        <div className='form-row'>
          <button
            disabled={!validate(name, email)}
          >Create</button>
          <button
            style={{marginLeft: '1rem'}}
            type='reset'
            onClick={cancel}
          >Cancel</button>
        </div>
      </form>
    </div>
  );
}
