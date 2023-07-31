import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const website = () => {
  return (
    <div>
      
            <NavLink to="/website" className="btn btn-outline-primary ms-2">
            website
            </NavLink>
    </div>
  )
}

export default website
