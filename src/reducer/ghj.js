export function wuyenotice(aa=null,action){
	switch(action.type){
		case 'WUYENOTICE':
		return action.cons;
		default:
		return aa
	}
}

export function wuyeantee(bb=null,action){
	switch(action.type){
		case 'WUYEANTEE':
		return action.con;
		default:
		return bb
	}
}

