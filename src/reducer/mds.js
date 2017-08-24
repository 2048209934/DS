export function huodong(huodong=[],action){
	switch(action.type){
		case 'WUYEHUODONG':
		return action.wuyehuodong
		default:
		return huodong
	}
}