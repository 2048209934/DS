export function wuyenotice(aa=[],action){
	switch(action.type){
		case 'WUYENOTICE':
		return action.cons;
		default:
		return aa
	}
}

export function wuyeantee(bb=[],action){
	switch(action.type){
		case 'WUYEANTEE':
		return action.con;
		default:
		return bb
	}
}
export function wuyebaoxiu(cc=[],action){
	switch(action.type){
		case 'WUYEBAOXIU':
		return action.contents;
		default:
		return cc
	}
}

export function yezhuaddres(dd=[],action){
	switch(action.type){
		case 'YEZHUADDRESS':
		return action.read;
		default:
		return dd
	}
}




