import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const Sub = ({onClick}) => {
  return (
   <Button onClick={onClick}>－</Button>
  );
};

Sub.propTypes = {
	onClick:PropTypes.func.isRequired
};

export default Sub;
