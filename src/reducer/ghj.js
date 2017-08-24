export function wuyenotice(aa=null,action){
	switch(action.type){
		case 'WUYENOTICE':
		return action.cons;
		default:
		return aa
	}
}
