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
              <h5>Internships</h5>
              <small>2 completed</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4 months</small>
            </article>
          </div>
          <p>
          I am a proficient web developer having experience in HTML, CSS, JavaScript, Tailwind, MERN Stack with Redux.
            I am also a budding software developer. I have worked with tools like git, npm, and docker.
              I can work on both Windows and Linux. I also have a very basic knowledge of bash scripting.
            I am a keen learner passionate about modern technology and eager to build a career in software development
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about