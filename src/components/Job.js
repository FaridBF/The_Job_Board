import React from 'react';

const Job = (props) => {
  return (
    <div className={`item ${props.className}`}>
      <h2 className='containerTitle'>{props.title}</h2>
      <p className='containerLocation'>
        {props.contractType} {props.country} {props.city}
      </p>
    </div>
  );
};

export default Job;
