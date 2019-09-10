import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    onClick,
    type,
    children,
    disabled,
  } = props;

  return (
    <button
      className="button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button"
}

export default React.memo(Button);
