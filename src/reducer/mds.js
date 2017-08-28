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