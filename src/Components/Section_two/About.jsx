import React from 'react'
import './About.css'
import edu from '../../assets/edu.png'
import exp from '../../assets/exp.png'
import cer from '../../assets/cer.png'



const About = () => {
  return (
    <div className='about-section' name="About">
        <div className='box'>
            <div className='logo'>
                <img src={data?.edu}</img>} />
            </div>
            <div className='content'>
                <h2>Education</h2>
                <h4>Bachelor in Engineering Computer Science (2015-2019)</h4>
                <p>Bannari Amman Institute of Technology College in Sathyamangalam, Tamil Nadu.</p>
            </div>
        </div>
        <div className='box'>
            <div className='logo'>
                <img src={exp} />
            </div>
            <div className='content'>
                <h2>Experience</h2>
                <h4>Junior Web Developer</h4>
                <p>Worked (09/2019 to 07/2023 3year’s and 10 months) - Synergos Tech Consulting Services, Bangalore</p>
            </div>
        </div>
        <div className='box'>
            <div className='logo'>
                <img src={cer} />
            </div>
            <div className='content'>
                <h2>Certifications</h2>
                <h4>Masters In MERN Full Stack Web Developnment</h4>
                <p>JSPIDERS - 18,1st floor, Brigade Seshmahal, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
            </div>
        </div>
    </div>
  )
}

export default About
