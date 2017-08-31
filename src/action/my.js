import config from './../config';
import $ from 'jquery';

/*业主登录*/

export function yezhuid(data){
	return {
		type:"YEZHUDATA",
		yezhudata:data
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
					window.sessionStorage.setItem('yezhu',0)
					sessionStorage
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){
					dispatch(yezhuid(0))
					window.sessionStorage.setItem('yezhu',0)
				}else{					
					dispatch(yezhuid(data))
					var yezhustr=JSON.stringify(data)
					window.sessionStorage.setItem('yezhu',yezhustr)
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

/*业主验证入住码*/

var id;
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

/*业主注册*/

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

/*物业登录*/

export function wuyeid(data){
	return {
		type:"WUYEDATA",
		wuyedata:data
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
					window.sessionStorage.setItem('wuye',0)
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){	
					dispatch(wuyeid(0))
					window.sessionStorage.setItem('wuye',0)
				}else{
					dispatch(wuyeid(data))
					var wuyestr=JSON.stringify(data)
					window.sessionStorage.setItem('wuye',wuyestr)
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

/*物业管理列表*/

export function wuyeglb(data){
	return {
		type:"WUYEGLDATA",
		wuyeglbdata:data
	}
}
export function wuyegllistpost(address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/wyguanli",
			data:{
				address:address
			},
			success:function(data){
				dispatch(wuyeglb(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}

/*物业管理添加*/

export function wuyegtj(data){
	return {
		type:"WUYETJDATA",
		wuyetjdata:data
	}
}
export function wuyegltjpost(address,name,sex,phone,family,homeyard){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/wyzhuhu",
			data:{
				address:address,
				name:name,
				sex:sex,
				phone:phone,
				family:family,
				homeyard:homeyard
			},
			success:function(data){
				dispatch(wuyegtj(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}


/*业主点评物业*/

export function yzdpwy(data){
	return {
		type:"YZDPWY",
		yepjwydata:data
	}
}
export function yzdpwypost(village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/yzzhgxqwy",
			data:{
				village:village
			},
			success:function(data){
				dispatch(yzdpwy(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}
export function yzhpwypost(id,uid,village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/yzhpwy",
			data:{
				id:id,
				uid:uid,
				village:village
			},
			success:function(data){
				dispatch(yzdpwy(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}
export function yzcpwypost(id,uid,village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/yzcpwy",
			data:{
				id:id,
				uid:uid,
				village:village
			},
			success:function(data){
				dispatch(yzdpwy(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}

