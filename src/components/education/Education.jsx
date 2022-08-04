import React from 'react'
import './education.css'
import {BiCheck} from 'react-icons/bi'

const Education = () => {
  return (
    <section id='education'>
      <h5>Here are Details of</h5>
      <h2>My Education</h2>
      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Academy Of Technology Engineering College</h3>
          </div>
          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Course: </b> Bachelor Of Technology</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Major: </b> Computer Science</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>From: </b> 04/2019</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>To: </b> Present</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>CGPA: </b> 8.91</p>
            </li>
          </ul>
        </article>
        {/* END OF COLLEGE */}
        <article className="education">
          <div className="education__head">
            <h3>Kalyani Public School</h3>
          </div>
          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Course: </b> Higher Secondary Education</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Major: </b> Science(PCM)</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>From: </b> 05/2017</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>To: </b> 04/2019</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Percentage: </b> 70.6</p>
            </li>
          </ul>
        </article>
        {/* END OF HIGH SCHOOL */}
        <article className="education">
          <div className="education__head">
            <h3>Assembly Of Angels' Secondary School</h3>
          </div>
          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Course: </b> Secondary Education</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Major: </b> Science</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>From: </b> 04/2005</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>To: </b> 03/2017</p>
            </li>
            <li>
              <BiCheck className='education__list-icon'/>
              <p><b>Percentage: </b> 84   </p>
            </li>
          </ul>
        </article>
        {/* END OF SCHOOL */}
      </div>
    </section>
  )
}

export default Education