import React from 'react'
import './project.css'
import star from '../../assets/star.jpg'
import skillnet from '../../assets/skillnet.jpg'
import adf from '../../assets/adf.jpg'
import thinkactive from '../../assets/thinkactive.jpg'



const Projucts = () => {
  return (
    <div className='projects' name='Projucts'>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={star} />
                <h2>Starsquaredpr</h2>
                </div>
                <div className="flip-card-back">
                    <p>Worked single handedly from the scratch, Technology used HTML, CSS, JS, JQUERY, and Back-End CMS-Wordpress</p> 
                    <a href='https://starsquaredpr.com/'>Project Link</a>
                </div>
            </div>
        </div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={thinkactive} />
                <h2>Synergostech</h2>
                </div>
                <div className="flip-card-back">
                    <p>Worked single handedly from the scratch, Technology used HTML,CSS,JS,JQUERY,PHP and Back-end  CMS-Wordpress</p> 
                    <a href='https://www.synergostech.com'>Project Link</a>
                </div>
            </div>
        </div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={skillnet} />
                <h2>Skillnet</h2>
                </div>
                <div className="flip-card-back">
                    <p>Worked from the scratch, Technology used Wordpress Beta Version Backend-CMS</p> 
                    <a href='https://www.skillnetinc.com'>Project Link</a>
                </div>
            </div>
        </div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={adf} />
                <h2>Additive flight solution</h2>
                </div>
                <div className="flip-card-back">
                    <p>Technology used HTML,CSS,JS,JQUERY,PHP,Responsive Website and Optimized and Back-end CMS-Wordpress</p> 
                    <a href='https://www.additiveflightsolutions.com/'>Project Link</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projucts
