import React, { useState } from 'react'
import './qualification.css'
import {FaGraduationCap} from "react-icons/fa"
import {FaBriefcase} from "react-icons/fa"
import {FaCalendarAlt} from "react-icons/fa"
const Qualification = () => {
const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return(
  <section id='qualification'>
    <h5>My Personal Journey</h5>
      <h2>Qualification</h2>


    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(1)}>
          <i className="qualification__icon"><FaGraduationCap/></i>Education
        </div>

        <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(2)}>
          <i className="qualification__icon"><FaBriefcase/></i>Experience
        </div>
      </div>

      <div className="qualification__sections">
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">ICSE</h3>
              <span className="qualification__subtitle">Assembly Of Angels' Secondary School</span>
              <div className="qualification__calendar">
                <i><FaCalendarAlt/>2016-2017</i>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>


          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">CBSE</h3>
              <span className="qualification__subtitle">Kalyani Public School</span>
              <div className="qualification__calendar">
                <i><FaCalendarAlt/>2018-2019</i>
              </div>
            </div>

            
          </div>


          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Btech</h3>
              <span className="qualification__subtitle">Academy Of Technology</span>
              <div className="qualification__calendar">
                <i><FaCalendarAlt/>2019-Present</i>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>


          
        </div>


        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Intern/Trainee</h3>
              <span className="qualification__subtitle">Persistent Systems</span>
              <div className="qualification__calendar">
                <i><FaCalendarAlt/>March-April 2022</i>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>


          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Full Stack Intern</h3>
              <span className="qualification__subtitle">Millimeter Labs</span>
              <div className="qualification__calendar">
                <i><FaCalendarAlt/>September-December 2022</i>
              </div>
            </div>

            
          </div>


          

          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Qualification;
