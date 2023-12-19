import React from 'react'
import "./Skills.css";
import ReactDesign from "../../assets/React.png"
import WebDesign from '../../assets/website-design.png'
import JavaDesign from "../../assets/java.svg"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">
        Versatile full-stack developer adept in <b>JavaScript(ES6+)</b>, <b>Java with strong OOP concepts</b>, and experienced in <b>ReactJS, ExpressJS, Spring Boot, MongoDB, REST APIs, and Bootstrap for building responsive websites</b>.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ReactDesign} alt="UIDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>React Aplication Development</h2>
                    <p>Skilled in React.js with hands-on expertise in libraries like Redux, and features such as virtual DOM, JSX, and component-based architecture, along with proficiency in implementing REST APIs</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={JavaDesign} alt="AppDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Java</h2>
                    <p>Proficient in Java with hands-on experience in OOP concepts</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Capable of designing responsive web interfaces using modern design principles and frameworks.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
