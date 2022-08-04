import React from 'react'
import './about.css'
import ME from '../../assets/me-about(1).jpeg'
import {FaAward} from 'react-icons/fa'
import {IoMdSchool} from 'react-icons/io'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__contents">
          <div className="about__cards">
            <article className='about__card'>
              <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Btech CSE</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2+</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit neque consequatur blanditiis corrupti fugit est. Consequatur,
            velit saepe amet est rerum assumenda, autem eum facere cupiditate ullam culpa tempora fugiat.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about