import React from 'react';
import * as cx from 'classnames';
import './_form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      id={label}
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={cx('form-input-label label', {
          shrink: otherProps.value.length,
        })}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
