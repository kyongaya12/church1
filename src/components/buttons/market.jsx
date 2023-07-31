import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const market = () => {
  return (
    <div>
    

            <NavLink to="/market" className="btn btn-outline-primary ms-2">
            market
            </NavLink>
    </div>
  )
}

export default market
