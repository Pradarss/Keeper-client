import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FooterArea, icons, iconstyle } from './FooterStyles';



function Footer() {
  return (
    <FooterArea style={{ padding: '10px' }} >
      <div style={{ marginTop: '10px' }}>
        <div>
          <h1 >Name</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={icons}>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={iconstyle} />

            </a>
          </div>
          <div style={icons}>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={iconstyle} />
            </a>
          </div>
          <div style={icons}>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={iconstyle} />
            </a>
          </div>
        </div>
      </div>
      <div >
        &copy; {new Date().getFullYear()} Name. All rights reserved.
      </div>
    </FooterArea>
  )
}

export default Footer;