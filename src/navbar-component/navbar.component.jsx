import React from 'react';
import {NavLink} from "react-router-dom";
//import {NavBar, Nav, NavItem, Container} from 'react-bootstrap';
import './navbar.css'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';


export function Navbar(){
    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return(
    <AnimatePresence >
        <div className="navBar">
        <div className="nav-container">
        <NavLink exact to='/' className='title'><h1>&lt;SOP&#x2215;&#62;</h1></NavLink>
        <i className="fas fa-code"></i>
        <ul className="navBar-ul">
            <li className="nav-link"> <NavLink activeClassName="active" exact to='/' className="nav-links">Home</NavLink></li>
            <li className="nav-link"> <NavLink activeClassName="active" exact to='/contribute' className="nav-links">Contribute</NavLink></li>
            <li className="nav-link"> <NavLink activeClassName="active" exact to='/goal' className="nav-links">Goal</NavLink></li>
            <li className="nav-link"> <NavLink activeClassName="active" exact to='/about' className="nav-links">about</NavLink></li>
        </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        </div>
    </AnimatePresence>
    )
}