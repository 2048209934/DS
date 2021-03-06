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
export function addpackage(name,address,phone,delivery,village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/wymail",
			data:{
				name:name,
				address:address,
				phone:phone,
				delivery:delivery,
				village:village
			},
			success:function(data){
				dispatch(add_package(data))
			},
			error:function(){
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
export function addhouse(name,address,family,homeyard){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/yztjzh",
			data:{
				name:name,
				address:address,
				family:family,
				homeyard:homeyard
			},
			success:function(data){
				dispatch(add_house(data))
			},
			error:function(){
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
			}
		})
	}
}




/*业主  已参加的活动  展示*/

export function show_activity(data) {
	return {
		type:"SHOW_ACTIVITY",
		datad:data
	}
}
export function showactivity(id,village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/activity/yzkzjcjdhd",
			data:{
				id:id,
				village:village
			},
			success:function(data){
				dispatch(show_activity(data))
			},
			error:function(){
			}
		})
	}
}



/*boss 查看物业 人数*/

export function boss_lookwuye(data) {
	return {
		type:"BOSS_LOOKWUYE",
		datac:data
	}
}
export function bosslookwuye(village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/bosskwyrs",
			data:{
				village:village
			},
			success:function(data){
				dispatch(boss_lookwuye(data))
			},
			error:function(){
			}
		})
	}
}





/*boss 添加物业 人数*/

export function boss_addwuye(data) {
	return {
		type:"BOSS_ADDWUYE",
		dataaa:data
	}
}
export function bossaddwuye(name,village,user,pass,phone){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/bosstjwy",
			data:{
				name:name,
				village:village,
				user:user,
				pass:pass,
				phone:phone
			},
			success:function(data){
				dispatch(boss_addwuye(data))
			},
			error:function(){
			}
		})
	}
}





/*boss 添加物业 人数 展示*/

export function bossaddwuyeshow(village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/yzzhgboss",
			data:{
				village:village
			},
			success:function(data){
				dispatch(boss_addwuye(data))
			},
			error:function(){
			}
		})
	}
}




/*业主 修改信息*/



export function yezhurevise(id,name,phone,email,sex){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/yhxzxx",
			data:{
				id:id,
				name:name,
				phone:phone,
				email:email,
				sex:sex
			},
			success:function(data){
				var yzstr=JSON.stringify(data)
				window.sessionStorage.setItem('yezhu',yzstr)

			},
			error:function(){
			}
		})
	}
}