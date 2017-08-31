import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/




import {a,add_wuyepackage,add_yezhuhouse,wuye_makesureparcel} from './hcc';
import {yezhudata,wuyedata,wuyegllb,yzpjwydata} from './my';
import {huodong,yezhuhuodong,yezhuluntan,yezhuluntanxq} from './mds';
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
	wuyeantee,
	wuyebaoxiu,
	yezhuaddres
})
