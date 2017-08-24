import config from './../config';
import $ from 'jquery';


export function package(village,address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/yzmail",
			data:{
				village:village,
				address:address
			},
			success:function(data){
				
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}