import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container">
                <NavLink to="/" className="navbar-brand fw-bold text-warning">CRUD App</NavLink>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#nav">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id="nav">
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link fw-bold">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/UserData' className="nav-link fw-bold">UserData</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}