import React, { forwardRef } from 'react';
import './InputForm.scss'

const InputForm = forwardRef((props, ref) => {
  return (
    <input ref={ref} className='inputForm' {...props} />
  );
});

export default InputForm;