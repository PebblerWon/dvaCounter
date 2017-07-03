import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const Add = ({onClick}) => {
  return (
   <Button onClick={onClick}>＋</Button>
  );
};

Add.propTypes = {
	onClick:PropTypes.func.isRequired
};

export default Add;
