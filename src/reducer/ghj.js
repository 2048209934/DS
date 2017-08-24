export function wuyenotice(state=null,action){
	switch(action.type){
		case 'WUYENOTICE':
		return action.wuyenotice
		default:
		return state
	}
}

