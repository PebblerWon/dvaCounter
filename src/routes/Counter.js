import React from 'react';
import {connect} from 'dva';
import Result from '../components/Result';
import Add from '../components/Add';
import Sub from '../components/Sub';

const Counter = ({dispatch,result})=>{
	function handleAdd(){
		dispatch({
			type:'result/addClick'
		})
	}
	function handleSub(){
		dispatch({
			type:'result/subClick'
		})
	}
	return(
		<div>
			<Result result={result} />
			<Add onClick={handleAdd} />
			<Sub onClick={handleSub} />
		</div>
	)
}

export default connect(
	({result})=>({
		result,
	})
)(Counter)