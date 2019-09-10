import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "./Typography.scss";

const Typography = (props) => {
  const {
    children,
    heading,
    titleBig,
    titleSmall,
    text,
    bold,
  } = props;

  const className = classnames({
    'typography': true,
    'heading': heading,
    'title-big': titleBig,
    'title-small': titleSmall,
    'text': text,
    'bold': bold,
  });

  return (
  <div className={className}>
    {children}
  </div>
  )
};

Typography.propTypes = {
  children: PropTypes.string,
  heading: PropTypes.bool,
  titleBig: PropTypes.bool,
  titleSmall: PropTypes.bool,
  text: PropTypes.bool,
  bold: PropTypes.bool,
};

export default React.memo(Typography);
