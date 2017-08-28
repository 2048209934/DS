import config from './../config'
import $ from 'jquery'

export function wuhds(data){
	return {
		type:"WUYEHUODONG",
		wuyehuodong:data
	}
}

export function yezhuhd(data){
	return {
		type:"YEZHUHUODONG",
		yezhuhuodong:data
	}
}



//业主活动查询
export function yezhuhdpost(village,id){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/activity/yzhuodong",
			data:{
				village:village,
				id:id
			},
			success:function(data){
				dispatch(yezhuhd(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


//业主活动参加
export function yezhuhdposts(id,uid,village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/activity/yzhuodongs",
			data:{
				id:id,
				uid:uid,
				village:village
			},
			success:function(data){
				dispatch(yezhuhd(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
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