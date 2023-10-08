import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor="addForm">Add Items</label>
    <input 
    autoFocus
    id='addForm'
    type="text"
    placeholder='Add Item'
    required
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    />
    <button
    type='button'
    aria-label='Add Item'
    onClick={handleSubmit}
  >
      <FaPlus />
  </button>
  </form>
  )
}

export default Additem
