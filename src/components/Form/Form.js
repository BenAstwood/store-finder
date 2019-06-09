import React from 'react';

import './Form.css'

const Form = props => {
  return <form onSubmit={props.submitEvent} className='store-finder-form'>{props.children}</form>
}

export default Form;