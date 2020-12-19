import React from 'react';
import * as cx from 'classnames';

import './_custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={cx('custom-button', {
      'google-sign-in': isGoogleSignIn,
      inverted,
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
