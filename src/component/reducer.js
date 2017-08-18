import {combineReducers} from 'redux'


function a(state=[],action){
	switch(action.type){
		case 'SHOWDATA':
		return action.data
		default:
		return state
	}
}

export default combineReducers({
	a
})