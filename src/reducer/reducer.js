import {combineReducers} from 'redux';
/*
import {} from './ghj';
import {} from './hcc';
import {} from './mds';
import {} from './my';
*/

import {yezhudata,wuyedata} from './my';
import {wuyenotice} from './ghj';

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
	wuyenotice
})


