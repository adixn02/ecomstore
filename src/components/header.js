import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center p-4 border m-2">
            <h1>Ecom store</h1>

            <nav>
                <ul className="d-flex align-items-center gap-3 list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>

        </div>
    );
}
export default Header;