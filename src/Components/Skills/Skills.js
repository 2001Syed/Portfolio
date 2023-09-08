import React from 'react'
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png"
import WebDesign from '../../assets/website-design.png'
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis rerum adipisci animi illum delectus sint culpa pariatur, odit, iusto aperiam autem libero, praesentium reprehenderit dolores! Fugiat esse minus, autem velit dolorem, debitis nostrum doloribus saepe reprehenderit tenetur earum, aliquam temporibus.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
