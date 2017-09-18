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

			}
		});	
	}
}
export function wuyenotices(village){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/notice/wytongzhis",
			data:{
				village:village
				
			},
			success:function(data){
				dispatch(wuyeid(data))
			},
			error:function(){
			}
		});	
	}
}
export function wuyeids(data){
	return {
		type:"WUYEANTEE",
		con:data
	}
}

export function wuyeantee(village){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/guarantee/wyguarantee",
			data:{
				village:village
			},
			success:function(data){
				dispatch(wuyeids(data))
			},
			error:function(){
			}
		});	
	}
}

export function wuye_bx(data){
	return {
		type:"WUYEBAOXIU",
		contents:data
	}
}

export function wuyebaoxiu(con,village,address){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/guarantee/yzguarantee",
			data:{
				con:con,
				village:village,
				address:address
			},
			success:function(data){
				dispatch(wuye_bx(data))
			},
			error:function(){
			}
		});	
	}
}
export function wuyeboxs(id,village,address){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/guarantee/wyguaranteess",
			data:{
				id:id,
				village:village,
				address:address
			},
			success:function(data){
				dispatch(wuye_bx(data))
				dispatch(wuyeids(data))
			},
			error:function(){
			}
		});	
	}
}

export function wuyejieshou(village,address){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/guarantee/yzjieshou",
			data:{
				village:village,
				address:address
			},
			success:function(data){
				dispatch(wuye_bx(data))
			},
			error:function(){
			}
		});	
	}
}
export function yezhu_address(data){
	return {
		type:"YEZHUADDRESS",
		read:data
	}
}

export function yezhuaddress(village){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/notice/yztongzhi",
			data:{	
				village:village	
			},
			success:function(data){
				dispatch(yezhu_address(data))
			},
			error:function(){
			}
		});	
	}
}

export function yezhuaddresss(village){
	return dispatch=>{
			return $.ajax({
			type:"post",
			url:config.url+"/guarantee/wyguarantees",
			data:{	
				village:village	
			},
			success:function(data){
				dispatch(wuye_bx(data))
			},
			error:function(){
			}
		});	
	}
}