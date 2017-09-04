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
//评论
export function yezhuluntanpl(yezhuluntanpl=[],action){
	switch(action.type){
		case 'YEZHUPINGLUN':
		return action.yezhupinglun
		default:
		return yezhuluntanpl
	}
}

//评论回复人
export function pinglunhuifu(pinglunhuifu="",action){
	switch(action.type){
		case 'PINGLUNHUIFU':
		return action.pinglunhuifu
		case 'PINGLUNSHURU':
		return action.pinglunshuru
		default:
		return pinglunhuifu
	}
}

//论坛图片
export function luntantupian(luntantupian=[],action){
	switch(action.type){
		case 'LUNTANTUPIAN':
		return action.luntantupian
		case 'LUNTANTUPIANS':
		return action.luntantupians
		default:
		return luntantupian
	}
}


//物业门牌号选择
export function wuyeyoubaobjs(wuyeyoubaobj=[],action){
	switch(action.type){
		case 'WUYEYOUBAOBJ':
		return action.wuyeyoubaobj
		default:
		return wuyeyoubaobj
	}
}

//头像
export function yezhuyx(yezhutx="",action){
	switch(action.type){
		case 'YEZHITOUXIANG':
		return action.yezhutouxiang
		default:
		return yezhutx
	}
}
//头像
export function wuyeyx(wuyetx="",action){
	switch(action.type){
		case 'WUYETOUX':
		return action.wuyetoux
		default:
		return wuyetx
	}
}

//bossluntan
export function bosslt(bosslunt=[],action){
	switch(action.type){
		case 'BOSSSTAT':
		return action.bossstass
		default:
		return bosslunt
	}
}