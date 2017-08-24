import config from './../config'
import $ from 'jquery'
var id;
export function wuyeid(data){
	return {
		type:"WUYENOTICE",
		wuyenotice:data
	}
}
export function wuyenotice(notice){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/notice/wytongzhi",
			data:{
				notice:notice
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

