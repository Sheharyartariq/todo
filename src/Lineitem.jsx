import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Lineitem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item">
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
  )
}

export default Lineitem
