import React from 'react'
import "./Skills.css";
import DBDesign from "../../assets/database.png"
import PowerBiDesign from '../../assets/business-intelligence.png'
import PythonDesign from "../../assets/python.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">
        I transform complex data into actionable insights and create detailed reports to support data-driven decisions. I handle <b>ETL processes</b>, <b>clean and preprocess data</b>, <b>develop models</b>, and generate visualizations. I also <b>optimize data workflows</b>, <b>ensure data quality</b>, and collaborate with teams to understand their data needs.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={DBDesign} alt="UIDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>SQL</h2>
                    <p>Proficient in writing and optimizing SQL queries to extract, manipulate, and analyze data efficiently.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={PythonDesign} alt="AppDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Python Visualization</h2>
                    <p>Skilled in Python visualization using libraries such as Matplotlib, Seaborn, and Plotly to create insightful and interactive charts and graphs.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={PowerBiDesign} alt="WebDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Power BI Reporting</h2>
                    <p>Experienced in Power BI reporting with expertise in integrating data from Excel, Power Query, and MS Access to create comprehensive and interactive dashboards.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
