import React from 'react'

const Searchitem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="serach">Search</label>
        <input
        id='search' 
        type='text'
        role='search'
        placeholder='Search Item'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default Searchitem
