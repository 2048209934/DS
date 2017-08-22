import config from './../config'
import $ from 'jquery'

var id;
function yezhuid(id){
	return {
		type:"YEZHUID",
		yezhuid:id
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
					alert("输入错误")					
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){
					alert("输入错误")
				}else{
					window.location.href="http://localhost:3000/yezhu/index?id="+data[0].id
					dispatch(yezhuid(data[0].id))
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
							window.location.href="http://localhost:3000/yezhu/index?id="+id
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
					alert("输入错误")					
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){
					alert("输入错误")
				}else{
					window.location.href="http://localhost:3000/wuye/index?id="+data[0].id
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

