import config from './../config'
import $ from 'jquery'
var id;
export function wuyeid(data){
	return {
		type:"WUYENOTICE",
		cons:data
	}
}

export function wuyenotice(village,name,con){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/notice/wytongzhi",
			data:{
				village:village,
				name:name,
				con:con
			},
			success:function(data){
				dispatch(wuyeid(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

