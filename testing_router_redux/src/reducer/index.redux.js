const ADD = 'ADD';
const SUB = 'SUB';
const ZERO = 'ZERO';

// reducer
export function counter(state=0, action){
	switch (action.type){
		case ADD:
			return state + 1;
		case SUB:
			return state - 1;
		case ZERO:
			return 0;
		default:
			return 10;

	}

}

// action creator 
export function add(){
	return {type:ADD}
}
export function sub(){
	return {type:SUB}
}
export function to_0(){
	return {type:ZERO}
}
// 异步的 action creator
export function async_0(dispatch){
	return (dispatch) => {
		setTimeout(()=>{
			dispatch(to_0());
		},2000);
	}
}