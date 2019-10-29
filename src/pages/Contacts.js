// @ts-check
import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';
import {
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';

import { Pagination } from '../components/Pagination';
import { Table } from '../components/Table';
import { config } from '../config';

export function Contacts({ api }) {
  const { page: _page } = useParams();
  const page = (_page && parseInt(_page, 10)) || 0;
  const history = useHistory();

  const [contacts, setContacts] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false)

  function navigate(page) {
    if (page) {
      history.push(`/${page}`);
    } else {
      history.push('/');
    }
  }

  useEffect(() => {
    async function getContacts() {
      setLoading(true);
      const { data, hasMore } = await api.fetchContacts(page, config.PAGE_SIZE);
      setContacts(data);
      setHasNext(hasMore);
      setLoading(false);
    }
    getContacts();
  }, [api, page]);

  return (
    <div className='page'>
      <Link to='/create'>Create contact</Link>

      {loading && <div className='loader'>Loading ...</div>}

      {!loading && <Fragment>
        <Table contacts={contacts}/>
        <Pagination
          page={page}
          hasNext={hasNext}
          setPage={navigate}
        />
      </Fragment>}
    </div>
  );
}

