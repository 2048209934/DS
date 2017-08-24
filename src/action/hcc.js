import config from './../config';
import $ from 'jquery';


export function sspackage(data) {
	return {
		type:"SPACKAGE",
		data:data
	}
}
export function spackage(village,address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/yzmail",
			data:{
				village:village,
				address:address
			},
			success:function(data){
				dispatch(sspackage(data))
				console.log(data)
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

