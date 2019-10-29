// @ts-check
import React, {
  useState,
  useEffect,
} from 'react';
import {
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';
import { config } from '../config';

import { fetchContacts } from '../api';

function Contact(props) {
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

function Pagination(props) {
  const {
    page,
    setPage,
    hasNext,
  } = props;

  return (
    <div style={{textAlign: 'center'}}>
      {page > 0 &&
        <span
          className='pagination-link'
          onClick={() => setPage(page - 1)}
        >previous</span>
      }
      <span style={{margin: '0 8px'}}>{page + 1}</span>
      {hasNext &&
        <span
          className='pagination-link'
          onClick={() => setPage(page + 1)}
        >next</span>
      }
    </div>
  )
}

export function Contacts() {
  const { page: _page } = useParams();
  const page = (_page && parseInt(_page, 10)) || 0;
  const history = useHistory();

  const [contacts, setContacts] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  function navigate(page) {
    if (page) {
      history.push(`/${page}`);
    } else {
      history.push('/');
    }
  }

  useEffect(() => {
    async function getContacts() {
      const { data, hasMore } = await fetchContacts(page, config.PAGE_SIZE);
      setContacts(data);
      setHasNext(hasMore);
    }
    getContacts();
  }, [page]);

  return (
    <div className='page'>
      <Link to='/create'>Create contact</Link>

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
      <Pagination
        page={page}
        hasNext={hasNext}
        setPage={navigate}
      />
    </div>
  );
}
