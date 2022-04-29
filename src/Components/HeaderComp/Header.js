import React, { useState, useRef, useEffect } from 'react'

const Header = () => {






    return (
        <div className="header-nav" >
            <nav className="navbar">
                <a href="./" className="nav-text">Home</a>
                <a href="./work" className="nav-text">Work</a>
                <a href="/blog" className="nav-text">Blog</a>

            </nav>
        </div>
    )
}

export default Header