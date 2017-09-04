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
					$(".mask").eq(1).show()
				}else if(data[0].user!=null){
					$(".mask").eq(2).show()	
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
							$(".mask").eq(3).show()
							$(".yezhudenglu").show()
							$(".yezhuzhuce").hide()
							$(".yezhuruhuma").hide()
						},
						error:function(){
							alert("0.0")
						}
					});	
				}else{
					$(".mask").eq(4).show()
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
export function yzdpwypost(village,uid){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/yzzhgxqwy",
			data:{
				village:village,
				uid:uid
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
				console.log(data)
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
				console.log(data)
				dispatch(yzdpwy(data))
			},
			error:function(){
				alert("0.0")
			}
		});
	}
}



/*boss登录*/
export function bossdlpost(dluser,dlpass){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/boss/bossdl",
			data:{
				user:dluser,
				pass:dlpass
			},
			success:function(data){
				if(data.length==0){	
					window.sessionStorage.setItem('boss',0)
				}else if(dluser!=data[0].user||dlpass!=data[0].pass){	
					window.sessionStorage.setItem('boss',0)
				}else{
					var bossstr=JSON.stringify(data)
					window.sessionStorage.setItem('boss',bossstr)
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}



/*展示小区*/

export function bosszsxq(data){
	return {
		type:"BOSSZSXQ",
		bosszsxqdata:data
	}
}
export function bosszsxqpost(){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/plot/plotzs",
			success:function(data){
				dispatch(bosszsxq(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}



/*展示小区人数*/

export function bosszsxqhz(data){
	return {
		type:"BOSSZSXQHZ",
		bosszsxqhzdata:data
	}
}
export function bosszsxqhzpost(address){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/owner/xqydshz",
			data:{
				address:address
			},
			success:function(data){
				dispatch(bosszsxqhz(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}



/*物业修改信息*/

export function wyxgxx(id,name,phone,sex,email){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/wyxgxx",
			data:{
				id:id,
				name:name,
				phone:phone,
				sex:sex,
				email:email
			},
			success:function(data){
				var wuyestr=JSON.stringify(data)
				window.sessionStorage.setItem('wuye',wuyestr)
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}



/*物业看自己的评价*/

export function wykzjdpjz(data){
	return {
		type:"WYKZJDPJZ",
		wykzjdpjsdata:data
	}
}
export function wykzjdpjpost(id){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/property/wyckzjdqj",
			data:{
				id:id
			},
			success:function(data){
				dispatch(wykzjdpjz(data))			
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}