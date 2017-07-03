export default{
	namespace:'result',
	state:0,
	reducers:{
		addClick(state){
			return (state+1);
		},
		subClick(state){
			return (state-1);
		}
	}
}