import React from 'react'
import './About.css'
 
function About() {
  return (
    <div className='about' id='aboutus'> 
    <h1 className='about-title'>ABOUT US</h1>
      <div className='about-container'>
       <p className='about-description'>Ay Cachapas opened its doors in the summer of 2021 at the Queens Night Market in Flushing Meadows Park, and has been serving sweet and savory Cachapas every summer there since. Cachapas are sweet corn pancakes that originate from Venezuela and are a street food staple. All of our Cachapas are served with mozzarella cheese with additional options of shredded beef or chicken. Every bite is a mouthwatering experience with sweetness that comes from the corn, savoriness from our shredded meats, and most importantly the cheese pull!</p>
       <img  className='about-image' src="./images/about.png" alt="about"  />
      </div>

    </div>
  )
}

export default About