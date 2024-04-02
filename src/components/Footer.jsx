// Modules
import React from 'react';


// CSS
import './Footer.css';

/**
 * General page footer
 */
const Footer = () => {
  return (
    <div className='footer'>

      {/* Logo links to homepage */}

      <br />
      <br />
     
      <div className='explain'>
  <p>This project is a web 3.0 blockchain smart contract healthcare crowdfunding application designed and implemented by Miracle Agholor for the Dissertation at the University of East London. It aims to revolutionize healthcare funding by leveraging blockchain technology for transparent and secure crowdfunding.</p>
</div>

     
     {/* Links to pages */}
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/Profile'>Profile</a>
        <a href='/Projectpage'>Projects</a>
        <a href='/CreateCampaign'>Start Project</a>
        <a href='/'>About</a>
      </div>
      
    </div>
  );
};

export default Footer;
