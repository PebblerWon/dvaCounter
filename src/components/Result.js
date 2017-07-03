import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

const Result = ({result})=>{
	return (
		<Tag>{result}</Tag>
		)
}

Result.propTypes = {
	result:PropTypes.number.isRequired
};

export default Result;
