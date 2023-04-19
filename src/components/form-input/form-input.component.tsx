import React from 'react';
import '../form-input/form-input.styles.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <>
      <div className="group">
        <input className="form-input" {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            htmlFor=""
          >
            {label}
          </label>
        )}
        
      </div>
    </>
  );
}

export default FormInput;
