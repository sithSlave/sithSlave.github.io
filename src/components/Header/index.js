import React from 'react';
import './style.css';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../Navbar'

function Header(props) {
   return (
      <Jumbotron className='d-flex justify-content-around justify-content-md-between flex-wrap jumbo'>
         <div className='username d-flex'>
            <h1 className='header text-light m-1'>Josh Miller</h1>
         </div>
         <Navigation currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
      </Jumbotron>
   )
};

export default Header;