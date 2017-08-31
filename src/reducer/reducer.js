import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/



import {a,add_wuyepackage,add_yezhuhouse,wuye_makesureparcel} from './hcc';
import {yezhudata,wuyedata,wuyegllb} from './my';
import {huodong,yezhuhuodong,yezhuluntan,yezhuluntanxq,yezhuluntanpl,pinglunhuifu,luntantupian} from './mds';
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
	yezhudata,
	wuyedata,
	wuyegllb,
	huodong,
	wuyenotice,
	a,
	yezhuhuodong,
	yezhuluntan,   //论坛
	yezhuluntanxq,
	add_wuyepackage,
	add_yezhuhouse,
	wuyeantee,
	wuyebaoxiu,
	yezhuaddres,
	yezhuluntanpl,//评论展示
	pinglunhuifu,
	luntantupian,//论坛图片
})
