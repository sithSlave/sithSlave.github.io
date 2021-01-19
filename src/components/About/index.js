import React from 'react';
import profilePic from '../../assets/profile.png'
import './style.css';

function About() {
   return (
      <section className='d-flex justify-content-md-start flex-wrap about'>
         <div id='about-head'>
            <h3>About Me</h3>
            <img className='profile-pic' src={profilePic} alt='Profile' />
         </div>
         <div>
            <article>
               <p className='text-start'>
                  <p>
                     I am Josh, I have always been interested in computers! Ever since I was little I was fascinated with video games, and learning how computers work. I was born and raised in Utah in a family of eight. I am the youngest.
                  </p>
                  <p>
                     My primary reason for being in this field is due to the influence of my software developer brothers, and my love for computers. In high school, I studied Business Webpage design, HTML5, and CSS. In addition I covered more
                     application-based development such as c#, c++, and Unity script. I designed a video game my senior year. I especially love the front-end development, and being able to make things look good. I have studied Digital Media
                     and it's basics as well as 3d modeling, and animation.
                  </p>
                  <p>
                     I completed the University of Utah Coding Bootcamp in January of 2021. I learned the MERN Stack. I'm very excited to build my practical experience!
                     I'm proficient in full stack development with a preference for front-end, and I'm a quick learner.
                  </p>
               </p>
            </article>
         </div>
      </section>
   );
}

export default About;