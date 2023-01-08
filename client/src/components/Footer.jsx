import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();
  const createdYear = '2023'

  const github = 'https://github.com/cauefrancisco';
  const linkedin = 'https://www.linkedin.com/in/caue-francisco/';

  const dateCopyRight = () => {
    if(String(year) === createdYear){
      return year;
    } else {
      return `${createdYear} - ${year}`;
    }
  } 

  return (
    <footer className='footer'>
       <div className="row m-0"> 
        <div className="col-4 footer-copywright">
        <h4 className='fluid-text'>Designed and Developed by Caue Francisco</h4>
        </div>

        <div className="col-4 footer-copywright">
        <h4 className='fluid-text'>Copyright © {dateCopyRight()} Caue Francisco</h4>
        </div>

        <div className="col-4 icons-container">
            <ul>
              <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin className='icon'/></a></li>
              <li><a href={github} target="_blank" rel="noopener noreferrer"><BsGithub className='icon'/></a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer