import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Header = () => {
    const cartItems = useSelector(store => store.cart.items)
//    console.log(cartItems)
    return (
        <div className="d-flex justify-content-between align-items-center p-4 border m-2">
            <h1>Ecom store</h1>

            <nav>
                <ul className="d-flex align-items-center gap-3 list-unstyled">
                    <li><Link className='text-decoration-none' to="/">Home</Link></li>
                    <li><Link className='text-decoration-none' to="/about">About</Link></li>
                    <li><Link className='text-decoration-none' to="/contact">Contact</Link></li>
                    <li><Link className='text-decoration-none' to="/cart">Cart -{cartItems.length}</Link></li>
                </ul>
            </nav>

        </div>
    );
}
export default Header;