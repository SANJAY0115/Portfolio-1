import React from 'react'
import './Sectionone.css'
import profile from '../assets/profile.jpg'


const Sectionone = () => {
  return (
    <div className='section_one' name='Sectionone'>
        <div className='left'>
            <img src={profile} />
        </div>
        <div className='right'>
            <h2>Hi, I'm Arun</h2>
            <h4>Full Stack Web Developer</h4>
            <p>
                I specialize in creating responsive and user-friendly web applications using modern technologies like React.js, Node.js, and Express.js. With a passion for problem-solving and attention to detail, I strive to deliver high-quality solutions to meet client needs.
            </p>
        </div>
    </div>
  )
}

export default Sectionone
