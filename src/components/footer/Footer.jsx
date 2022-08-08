import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aritra</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/aritra-chatterjee-264127235/" target='_blank'><BsLinkedin/></a>
      <a href="https://www.instagram.com/delirious._.mistakes/"><FaInstagram/></a>
      <a href="https://twitter.com/chatterjeeari17"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aritra Chatterjee. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer