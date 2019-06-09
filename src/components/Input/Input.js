import React from 'react';

import './Input.css'
const Input = props => {
  return (
    <div className='input-wrapper'><input
      className='search-input'
      id='search-store'
      value={props.value}
      onChange={props.changed}/>
      <label className='screen-reader-label' htmlFor="search-store">Enter city or postcode here to find a store near you</label>
    </div>
  );
};

export default Input;