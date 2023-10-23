import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FooterArea } from './FooterStyles';

const iconstyle= {
  color: 'white'
}

function Footer(){
    return(
        <FooterArea >
        <div>
          <div>
            <h1 >Name</h1>
          </div>
          <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={iconstyle} />
              
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={iconstyle} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={iconstyle} />
            </a>
          </div>
        </div>
        <div >
          &copy; {new Date().getFullYear()} Name. All rights reserved.
        </div>
      </FooterArea>
    )
}

export default Footer;