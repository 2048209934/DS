import config from './../config';
import $ from 'jquery';

/*业主 收邮包*/
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
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}


/*物业   添加邮包*/
export function add_package(data) {
	return {
		type:"ADD_PACKAGE",
		datas:data
	}
}
export function addpackage(name,address,phone,delivery){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/wymail",
			data:{
				name:name,
				address:address,
				phone:phone,
				delivery:delivery
			},
			success:function(data){
				dispatch(add_package(data))
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}




/*物业  添加邮包 展示*/
export function show_package(data) {
	return {
		type:"SHOW_PACKAGE",
		datass:data
	}
}
export function showpackage(address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/wymailtj",
			data:{
				address:address
			},
			success:function(data){
				dispatch(show_package(data))
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}



/*物业  确认 已收 邮包*/
export function wuye_makesure(data) {
	return {
		type:"WUYE_MAKESURE",
		dataa:data
	}
}
export function wuyemakesure(id,address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/wymailjs",
			data:{
				id:id,
				address:address
			},
			success:function(data){
				dispatch(wuye_makesure(data))
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}



/*业主  添加住户*/
export function add_house(data) {
	return {
		type:"ADD_HOUSE",
		datassss:data
	}
}
export function addhouse(name,address,family){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/yztjzh",
			data:{
				name:name,
				address:address,
				family:family
			},
			success:function(data){
				dispatch(add_house(data))
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}




/*业主  添加住户 展示*/
export function show_house(data) {
	return {
		type:"SHOW_HOUSE",
		datasss:data
	}
}
export function showhouse(address,family){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/yzchaxunfw",
			data:{
				address:address,
				family:family
			},
			success:function(data){
				dispatch(show_house(data))
			},
			error:function(){
				alert("0.0")
			}
		})
	}
}


