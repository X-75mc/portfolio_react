import React from 'react';

import BtnDarkMode from './../BtnDarkMode/BtnDarkMode';
import './style.css';
import { NavLink } from 'react-router-dom';


function NavBar (){

    const activeLink = 'nav-list__link nav-list__link--active';
    const noActiveLink = 'nav-list__link';

    return(
        <nav className="nav">
        <div className="container">
            <div className="nav-row">

                <NavLink to ="/" className="logo">
                    <strong>Freelancer</strong> portfolio
                </NavLink>
                

                <BtnDarkMode/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to = "/" className={({isActive}) => 
                             isActive ?  activeLink : noActiveLink
                        }>
                            Home
                        </NavLink></li>
                    <li className="nav-list__item">
                        <NavLink to = "/projects" className={({isActive}) => 
                             isActive ?  activeLink : noActiveLink
                        }>
                            Projects
                        </NavLink></li>
                    <li className="nav-list__item">
                        <NavLink to ="/contacts" className={({isActive}) => 
                             isActive ?  activeLink : noActiveLink
                        }>
                        Contacts
                        </NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;