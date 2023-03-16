import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">

        < Link className="navbar-brand" to="/">useContext</ Link>
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
            to="home" >
            Home  

          </NavLink>
          <NavLink
          className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
          
            to="about" >
            About 

          </NavLink>
          <NavLink
          className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
          
            to="login" >
            login

          </NavLink>
         
          
          </ul>
        </div>
      </nav>
    )
}
