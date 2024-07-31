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
            <p className="intropara">A Highly Skilled Data Analyst with Extensive Experience in Power BI, Excel, SQL, Python, and Data Visualization. Passionate about Turning Data into Insights and Driving Decision-Making.</p>
            <Link><button className="btn" onClick={()=>{
              document.getElementById("contact").scrollIntoView();
              }}><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
    </section>
  )
}

export default Intro
