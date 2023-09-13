import React from 'react'
import "./Skills.css";
import ReactDesign from "../../assets/React.png"
import WebDesign from '../../assets/website-design.png'
import NodeDesign from "../../assets/node-js.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">
            Front-end developer with proven ability to design and develop JavaScript-based applications for web or mobile environments. Strong knowledge of <b><i>React JS, JSON, Node.js, Typescript, HTML, CSS, and Bootstrap</i></b>.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ReactDesign} alt="UIDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>React Developer</h2>
                    <p>JavaScript , ES6 , TypeScript , React-Routing</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>HTML, CSS, TailwindCSS, Bootstrap</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={NodeDesign} alt="AppDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Node.js</h2>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
