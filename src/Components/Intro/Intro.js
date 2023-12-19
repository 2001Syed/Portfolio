import React from 'react'
import "./Intro.css"
import bg from '../../assets/background-animated.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
        <img src={bg} alt="" className='bg'/>
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introname">Syed</span><br /></span>
            <p className="intropara">A dynamic full-stack developer with a strong foundation in Java and JavaScript.</p>
            <Link><button className="btn" onClick={()=>{
              document.getElementById("contact").scrollIntoView();
              }}><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
    </section>
  )
}

export default Intro
