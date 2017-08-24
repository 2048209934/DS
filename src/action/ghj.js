import config from './../config'
import $ from 'jquery'
var id;
export function wuyeid(data){
	return {
		type:"WUYENOTICE",
		data
	}
}

export function wuyenotice(){
	return dispatch=>{
		return fetch('http://localhost:8100/notice/wytongzhi')
		.then(e=>e.json())
		.then(data=>dispatch(wuyeid(data.data)))
		.catch(e=>alert("失败"))
	}
}