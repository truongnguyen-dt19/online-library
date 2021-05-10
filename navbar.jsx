import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Library</Link>
            <NavLink className="nav-item nav-link" to="/books">Books</NavLink>
            <NavLink className="nav-item nav-link" to="/members">Members</NavLink>
            <NavLink className="nav-item nav-link" to="/borrows">Borrows</NavLink>
        </nav>
    );
}

export default NavBar;