import React from 'react';

const Card = ({link}) => {
  const {name, url, image} = link;
  return (
    <a rel="noopener noreferrer" target="_blank" href={url}>
      <div className='link-card-container'>
        <img src={image}/>
        <p>{name}</p>
      </div>
    </a>
  )
}

export default Card;