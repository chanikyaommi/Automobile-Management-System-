// Home.js
import React from 'react';
// import { Link } from 'react-router-dom';

import './Home.css'; 
import AppBar from './Appbar.js';
import { colors } from '@mui/material';


function Home() {
  return (
    <div>
      
      <div className="home-container">
      <AppBar position="static">
      </AppBar>
      </div>
       <div className='body'>
      <div className='Head_content'>
        <h1 > Automobile Management System</h1>
<br></br>
        <h4 className='Font_text'>Attract,Engage,&Convert</h4>
        
        <h3 className='Font_text'>More</h3>
        <h4 className='Font_text'>Qualified Vehicle shoppers</h4>

      </div>
      </div>
    </div>
  );
}

export default Home;