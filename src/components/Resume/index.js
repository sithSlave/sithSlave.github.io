import React from 'react';
import resume from '../../assets/JoshuaMillerResume.pdf'
import './style.css';

function Resume() {
   return (
      <section>
         <h2>Resume</h2> 
         <iframe src={resume} title='Josh Miller Resume' type='application/pdf' width='100%' height='100%' />
      </section>
   );
}

export default Resume;