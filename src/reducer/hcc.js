export function a(state=[],action){
	switch(action.type){
		case 'SPACKAGE':
		return action.data
		default:
		return state
	}
}

export function add_wuyepackage(state=[],action){
	switch(action.type){
		case 'ADD_PACKAGE':
		return action.datas;
		case 'SHOW_PACKAGE':
		return action.datass;
		case 'WUYE_MAKESURE':
		return action.dataa;
		default:
		return state
	}
}


export function add_yezhuhouse(state=[],action){
	switch(action.type){
		case 'SHOW_HOUSE':
		return action.datasss;
		case 'ADD_HOUSE':
		return action.datassss;
		default:
		return state
	}
}



export function yezhuactivity(state=[],action){
	switch(action.type){
		case 'SHOW_ACTIVITY':
		return action.datad;
		default:
		return state
	}
}
