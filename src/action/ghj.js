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
				alert("0.0")
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
				console.log(data)
				dispatch(wuye_bx(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


