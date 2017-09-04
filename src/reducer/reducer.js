import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/




import {huodong,yezhuhuodong,yezhuluntan,yezhuluntanxq,yezhuluntanpl,pinglunhuifu,luntantupian,wuyeyoubaobjs,yezhuyx,bosslt,wuyeyx} from './mds';

import {a,add_wuyepackage,add_yezhuhouse,wuye_makesureparcel,yezhuactivity,bosslwuye,bossawuye} from './hcc';
import {yezhudata,wuyedata,wuyegllb,yzpjwydata,bosszsxqdata,bosszsxqhzdata,wykzjdpjdata} from './my';
import {wuyenotice,wuyeantee,wuyebaoxiu,yezhuaddres} from './ghj';

/*
function a(state=[],action){
	switch(action.type){
		case 'SHOWDATA':
		return action.data
		default:
		return state
	}
}
*/

export default combineReducers({
	wykzjdpjdata,
	bosszsxqhzdata,
	bosszsxqdata,
	yzpjwydata,
	yezhudata,
	wuyedata,
	wuyegllb,
	huodong,
	wuyenotice,
	a,
	yezhuhuodong,
	yezhuluntan,   
	yezhuluntanxq,
	add_wuyepackage,
	add_yezhuhouse,
	bosslwuye,  //boss 查看物业人数
	bossawuye,	//boss 添加物业人数
	yezhuactivity, // 业主已参加的活动
	wuyeantee,
	wuyebaoxiu,
	yezhuaddres,
	yezhuluntanpl,//评论展示
	pinglunhuifu,
	luntantupian,//论坛图片
	wuyeyoubaobjs,
	yezhuyx,
	bosslt,
	wuyeyx,
})
