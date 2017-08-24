export function yezhudata(state=null,action){
	switch(action.type){
		case 'YEZHUDATA':
		return action.yezhudata
		default:
		return state
	}
}

export function wuyedata(state=null,action){
	switch(action.type){
		case 'WUYEDATA':
		return action.wuyedata
		default:
		return state
	}
}

