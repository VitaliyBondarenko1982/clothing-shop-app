import React from 'react';
import * as cx from 'classnames';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      id={label}
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <FormInputLabel
        className={cx('form-input-label label', {
          shrink: otherProps.value.length,
        })}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
