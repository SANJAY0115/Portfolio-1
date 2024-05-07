import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { Link, Element, animateScroll as scroll } from 'react-scroll';





const Navbar = () => {

    let [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      let handleScroll = () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) { 
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div className={`header  ${isSticky? `sticky`:``} `}>
        <div className='logo'>
            <h1>portfolio</h1>
        </div>
        <nav className='nav'>
            <Link to='Sectionone' smooth={true} duration={500} offset={0}>Home</Link>
            <Link to='About' smooth={true} duration={500} offset={-170}>About</Link>
            <Link to='Projucts' smooth={true} duration={500} offset={-170}>Projects</Link>
            <Link to='Contact' smooth={true} duration={500} offset={-170}>Get in touch</Link>
        </nav>
        <div className='contact-btn'>
            <Link to='Contact' smooth={true} duration={500} offset={0}>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
