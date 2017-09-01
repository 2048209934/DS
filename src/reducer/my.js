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

export function wuyegllb(state=[],action){
	switch(action.type){
		case 'WUYEGLDATA':
		return action.wuyeglbdata
		case 'WUYETJDATA':
		return action.wuyetjdata
		default:
		return state
	}
}


export function yzpjwydata(state=[],action){
	switch(action.type){
		case 'YZDPWY':
		return action.yepjwydata
		default:
		return state
	}
}


export function bosszsxqdata(state=[],action){
	switch(action.type){
		case 'BOSSZSXQ':
		return action.bosszsxqdata
		default:
		return state
	}
}


export function bosszsxqhzdata(state=[],action){
	switch(action.type){
		case 'BOSSZSXQHZ':
		return action.bosszsxqhzdata
		default:
		return state
	}
}