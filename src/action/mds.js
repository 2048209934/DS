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



//业主接收论坛
export function yezhultjs(data){
	return {
		type:"YEZHULUNTAN",
		yezhuluntan:data
	}
}


export function yezhultjspost(village,uid){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/forum/yzluntans",
			data:{
				village:village,
				uid:uid
			},
			success:function(data){
				
				dispatch(yezhultjs(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

//业主接收论坛详情
export function yezhultxq(data){
	return {
		type:"YEZHULUNTANXQ",
		yezhuluntanxq:data
	}
}


export function yezhultxqpost(id,uid){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/forum/yzluntxq",
			data:{
				id:id,
				uid:uid
			},
			success:function(data){
				dispatch(yezhultxq(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

//业主论坛详情点赞
export function yezhultzan(id,uid){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/forum/yzluntanzan",
			data:{
				id:id,
				uid:uid
			},
			success:function(data){
				dispatch(yezhultxq(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}

//业主论坛评论展示
export function yezhultpl(data){
	return {
		type:"YEZHUPINGLUN",
		yezhupinglun:data
	}
}
export function yezhultpinglun(uid){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/reply/yzpingluncx",
			data:{
				uid:uid
			},
			success:function(data){
			dispatch(yezhultpl(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}
//评论选择回复人
export function pinglunhuifu(data){
	return {
		type:"PINGLUNHUIFU",
		pinglunhuifu:data
	}
}

export function pinglunshuru(data){
	return {
		type:"PINGLUNSHURU",
		pinglunshuru:data
	}
}

//业主论坛评论输入
export function yezhupinglunss(uid,title,name,names){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/reply/yzpinglun",
			data:{
				uid:uid,
				title:title,
				name:name,
				names:names
			},
			success:function(data){
			dispatch(yezhultpl(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


//业主论坛发布图片
export function luntantupians(data){
	return {
		type:"LUNTANTUPIANS",
		luntantupians:data
	}
}
export function luntantupian(data){
	return {
		type:"LUNTANTUPIAN",
		luntantupian:data
	}
}
export function yezhuluntanfb(fd){
	return dispatch=>{
		return $.ajax({
				type:"post",
				url:"http://localhost:8100/forum/img",
				async:true,
				data:fd,
				contentType:false,
				processData:false,
				success:function(e){				
					dispatch(luntantupian(e))
      			}
			});
	}
}

//论坛提交
export function luntantijiao(data){
	return {
		type:"LUNTANTUPIAN",
		luntantupian:data
	}
}
export function yezhuluntantjes(name,con,village,uid,img,toux){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/forum/yzluntan",
			data:{
				name:name,
				con:con,
				village:village,
				uid:uid,
				img:img,
				toux:toux
			},
			success:function(data){
			dispatch(yezhultxq(data))	
			window.location.href="http://localhost:3000/yezhu/index/shequ"
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


//物业邮包编辑
export function wuyeybbj(data){
	return {
		type:"WUYEYOUBAOBJ",
		wuyeyoubaobj:data
	}
}
export function wuyeyoubaobj(village){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/mail/wymailmph",
			data:{
				village:village,
			},
			success:function(data){
				dispatch(wuyeybbj(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}


//访客邀请

export function fangkepost(title,name){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/code/codess",
			data:{
				title:title,
				name:name
			},
			success:function(data){
			console.log(data)
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}



//换头像
export function yezhutx(data){
	return {
		type:"YEZHITOUXIANG",
		yezhutouxiang:data
	}
}
export function touxiangpost(fd,id){
	var aa=fd
	var bb=id
	var imgs=null
	return dispatch=>{
		return $.ajax({
				type:"post",
				url:"http://localhost:8100/owner/touxiangs",
				async:true,
				data:fd,
				contentType:false,
				processData:false,
				success:function(e){
				
				imgs=e
				$.ajax({
				type:"post",
				url:"http://localhost:8100/owner/touxiangcharu",
				async:true,
				data:{
				id:bb,
				img:imgs
			},
				success:function(s){
			var yezhustr=JSON.stringify(s)
			window.sessionStorage.setItem('yezhu',yezhustr)
			dispatch(yezhutx(s[0].imgs))
      			}
			});
      			}
			});
	}
}

//物业
export function wuyetx(data){
	return {
		type:"WUYETOUX",
		wuyetoux:data
	}
}
export function wytouxiangpost(fd,id){
	var aa=fd
	var bb=id
	var imgs=null
	return dispatch=>{
		return $.ajax({
				type:"post",
				url:"http://localhost:8100/property/touxiangs",
				async:true,
				data:fd,
				contentType:false,
				processData:false,
				success:function(e){
				
				imgs=e
				$.ajax({
				type:"post",
				url:"http://localhost:8100/property/touxiangcharu",
				async:true,
				data:{
				id:bb,
				img:imgs
			},
				success:function(s){
					//console.log(s[0].toux)
			var yezhustr=JSON.stringify(s)
			window.sessionStorage.setItem('wuye',yezhustr)
			dispatch(wuyetx(s[0].toux))
      			}
			});
      			}
			});
	}
}



//boss luntan
export function bossstat(data){
	return {
		type:"BOSSSTAT",
		bossstass:data
	}
}
export function bossshequ(){
	return dispatch=>{
		return $.ajax({
			type:"post",
			url:config.url+"/boss/bosslunt",
			data:{
				
			},
			success:function(data){
			dispatch(bossstat(data))
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}
