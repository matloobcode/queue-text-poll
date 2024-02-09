import React from 'react';
import './view.css'
export function View({ textQueue }){
  return (
    <div >
      <h2>Section 2 - Queue Status</h2>
      <ul>
        {textQueue.map((item, index) => (
          <li className='list text-danger fw-bold' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
