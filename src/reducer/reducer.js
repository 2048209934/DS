import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/


<<<<<<< HEAD
import {a} from './hcc';
import {yezhudata,wuyedata,wuyegllb} from './my';
=======
import {a,add_wuyepackage,add_yezhuhouse,wuye_makesureparcel} from './hcc';
import {yezhudata,wuyedata} from './my';
>>>>>>> origin/master
import {huodong,yezhuhuodong} from './mds';
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
	add_wuyepackage,
	add_yezhuhouse,
	wuyeantee,
	wuyebaoxiu,
	yezhuhuodong,
	yezhuaddres
})
