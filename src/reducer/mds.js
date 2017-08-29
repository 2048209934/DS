export function huodong(huodong=[],action){
	switch(action.type){
		case 'WUYEHUODONG':
		return action.wuyehuodong
		default:
		return huodong
	}
}

export function yezhuhuodong(yezhuhuodong=[],action){
	switch(action.type){
		case 'YEZHUHUODONG':
		return action.yezhuhuodong
		default:
		return yezhuhuodong
	}
}

export function yezhuluntan(yezhuluntan=[],action){
	switch(action.type){
		case 'YEZHULUNTAN':
		return action.yezhuluntan
		default:
		return yezhuluntan
	}
}

export function yezhuluntanxq(yezhuluntanxq=[],action){
	switch(action.type){
		case 'YEZHULUNTANXQ':
		return action.yezhuluntanxq
		default:
		return yezhuluntanxq
	}
}