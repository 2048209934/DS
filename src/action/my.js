import config from './../config'
import $ from 'jquery'


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
					window.location.href="http://localhost:3000/yezhu/index"
				}
			},
			error:function(){
				alert("0.0")
			}
		});	
	}
}