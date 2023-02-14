import React from 'react'
import { NavLink } from 'react-router-dom'
import Register from '../pages/Register'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">Travel-x</div>
                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/hillstations">Hill Stations </a>
                    <a href="/bestoffers">Best Offers</a>
                    <a href="/oursites">Our sites </a>
                    <a href="/contact">Contacts</a>
                    <a href="/about">About</a>
                </div>
                <div className="register">
                    <a href="/register">Register</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar