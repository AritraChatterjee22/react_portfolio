import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME from "../../assets/me(1).png"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Aritra Chatterjee</h1>
        <h5 className="text_light">Freasher computer science Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div id="me">
          <img src={ME} alt="me" className='me__image' />
        </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header