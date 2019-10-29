import React from 'react'

export function Pagination(props) {
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
