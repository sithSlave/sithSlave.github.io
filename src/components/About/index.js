import React from 'react';
import profilePic from '../../assets/profile.png'
import './style.css';

function About() {
   return (
      <section className='d-flex justify-content-md-start flex-wrap'>
         <div id='about-head'>
            <h3>About Me</h3>
            <img src={profilePic} alt='Profile' />
         </div>
         <div>
            <article>
               <p className='text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione tenetur ad odio hic minima, aliquid, modi blanditiis beatae temporibus id, 
                  quae natus molestias at! Sed fugit tempore ullam neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque! Inventore id temporibus consequatur.
                  Maxime fuga a, fugiat beatae rerum, eligendi, officia culpa explicabo quos incidunt illo perferendis odit dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit placeat voluptatum, expedita nihil sit assumenda ut necessitatibus quasi soluta tempora dolores consequatur explicabo ullam aspernatur, doloribus vel perspiciatis harum fugit.
               </p>
            </article>
         </div>
      </section>
   );
}

export default About;