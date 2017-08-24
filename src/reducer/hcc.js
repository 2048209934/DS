export function a(state=[],action){
	switch(action.type){
		case 'SPACKAGE':
		return action.data
		default:
		return state
	}
}
