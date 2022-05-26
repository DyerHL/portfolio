import React, { useEffect, useState } from 'react';
import techs from '../assets/techs.json'

export default function Technologies() {
  const logos = techs.techs;

  return (
    <div className="techs" id="tech">
      <br />
      <br />
      <div className='fill-center'>
        <div className="tech-fill">Technologies</div>
      </div>
      <div className="body-tech">
        {logos.map((item) => (
          <img className="tech-img" src={item.url} alt={`${item.name}`}/>
        ))}
      </div>
    </div>
  );
}
