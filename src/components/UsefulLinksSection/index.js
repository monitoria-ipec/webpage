import React from 'react';
import './styles.scss';
import Card from './Card';
import Links from './data.js';

const UsefulLinksSection = () => {
  return (
    <div className='useful-links-container'>
      <div className='useful-links-content'>
        <div className='useful-links-title'>
          <h1>Links Úteis</h1>
        </div>
        <div className='useful-links-cards'>
          {
            Links.map((link, index) => {
              return <Card key={index} link={link}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UsefulLinksSection;