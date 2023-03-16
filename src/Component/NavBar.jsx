import React, { useRef, useState } from 'react';
import './styles/NavBar.css'

export default function NavBar() {
    const primaryNavigation = useRef(null);
    const mobileNavToggle = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible);
        setExpanded(!expanded)
    };

    return (
        <header className="primary-header">
            <div>
                <h3 className="logo">LOGO</h3>
            </div>

            <button onClick={handleClick} ref={mobileNavToggle} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={expanded} ><span className="sr-only" >Menu</span></button>

            <nav>
                <ul ref={primaryNavigation} id="primary-navigation" data-visible={isVisible} className="primary-navigation flex">
                    <li className="active">
                        <a href=""> <span aria-hidden="true">00</span>Home </a>
                    </li>
                    <li className="active">
                        <a href=""> <span aria-hidden="true">01</span>Destination </a>
                    </li>
                    <li className="active">
                        <a href=""> <span aria-hidden="true">02</span>Crew </a>
                    </li>
                    <li className="active">
                        <a href=""> <span aria-hidden="true">03</span>Technology </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}