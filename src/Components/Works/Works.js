import React from 'react'
import "./Works.css"
import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"
import Portfolio4 from "../../assets/portfolio-4.png"
import Portfolio5 from "../../assets/portfolio-5.png"
import Portfolio6 from "../../assets/portfolio-6.png"

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc">
          <b><i>Ambitious</i></b> and <b><i>self-esteemed</i></b> fresher who is capable of applying skills for the improvement of the company. Seeking an Entry level opportunity with an esteemed organization where I can utilize my skills and enhance learning in the field of work. 
        </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">
            See More
        </button>
    </section>
  )
}

export default Works
