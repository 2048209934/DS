import config from './../config'
import $ from 'jquery'

export function wuhds(data){
	return {
		type:"WUYEHUODONG",
		wuyehuodong:data
	}
}


//物业活动查询
export function wuyehdpost(village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/activity/wyhuodongs",
			data:{
				village:village
			},
			success:function(data){
				dispatch(wuhds(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


//物业活动添加
export function wuyehdtjpost(village,name,con){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/activity/wyhuodong",
			data:{
				village:village,
				name:name,
				con:con
			},
			success:function(data){
				dispatch(wuhds(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}