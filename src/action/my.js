import config from './../config';
import $ from 'jquery';

var id;
export function yezhuid(data){
	return {
		type:"YEZHUDATA",
		yezhudata:data
	}
}

export function wuyeid(data){
	return {
		type:"WUYEDATA",
		wuyedata:data
	}
}

export function yezhudlpost(dluser,dlpass){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/login1/zhinquiry",
			data:{
				user:dluser,
				pass:dlpass
			},
			success:function(data){
				if(data.length==0){
					dispatch(yezhuid(0))
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){
					dispatch(yezhuid(0))
				}else{					
					dispatch(yezhuid(data))
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

export function yezhurhmpost(homeyard){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/login1/rhminquiry",
			data:{
				homeyard:homeyard
			},
			success:function(data){
				if(data.length==0){				
					alert("输入错误")	
				}else if(data[0].user!=null){
					alert("该入户码已被使用")	
				}else{
					$(".yezhudenglu").hide()
					$(".yezhuzhuce").show()
					$(".yezhuruhuma").hide()
					id=data[0].id
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

export function yezhuzcpost(zcuser,zcpass){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/login1/zczhminquiry",
			data:{
				user:zcuser
			},
			success:function(data){
				if(data.length==[]){
					$.ajax({
						type:"post",
						url:config.url+"/login1/zcminquiry",
						data:{
							user:zcuser,
							pass:zcpass,
							id:id
						},
						success:function(data){
							alert("注册成功")
							$(".yezhudenglu").show()
							$(".yezhuzhuce").hide()
							$(".yezhuruhuma").hide()
						},
						error:function(){
							alert("0.0")
						}
					});	
				}else{
					alert("该用户名已被注册")
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

export function wuyedlpost(dluser,dlpass){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/wydenglu",
			data:{
				user:dluser,
				pass:dlpass
			},
			success:function(data){
				if(data.length==0){	
					dispatch(wuyeid(0))
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){	
					dispatch(wuyeid(0))
				}else{
					dispatch(wuyeid(data))
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

