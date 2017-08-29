import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/


import {a} from './hcc';
import {yezhudata,wuyedata} from './my';
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
	huodong,
	wuyenotice,
	a,
	wuyeantee,
	wuyebaoxiu,
	yezhuhuodong,
	yezhuaddres
})
