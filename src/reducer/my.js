export function yezhuid(state=0,action){
	switch(action.type){
		case 'YEZHUID':
		return action.yezhuid
		default:
		console.log(action.type)
		return state
	}
}
