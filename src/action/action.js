
import {wuyehdpost,wuyehdtjpost,yezhuhdpost,yezhuhdposts,yezhultjspost,yezhultxqpost,yezhultzan,yezhultpinglun,pinglunhuifu,pinglunshuru,yezhupinglunss,yezhuluntanfb,luntantupians,yezhuluntantjes,wuyeyoubaobj,fangkepost,touxiangpost,bossshequ,wytouxiangpost} from './mds'


import {spackage,addpackage,showpackage,showhouse,addhouse,wuyemakesure,showactivity,bosslookwuye,bossaddwuye,bossaddwuyeshow,yezhurevise} from './hcc';
import {yezhudlpost,yezhurhmpost,yezhuzcpost,wuyedlpost,wuyegllistpost,wuyegltjpost,yzdpwypost,yzhpwypost,yzcpwypost,bossdlpost,bosszsxqpost,bosszsxqhzpost,wyxgxx,wykzjdpjpost} from './my'
import {wuyenotice,wuyeantee,wuyebaoxiu,yezhuaddress,wuyejieshou,wuyenotices,wuyeboxs,yezhuaddresss} from './ghj'





export function bossdlv(dluser,dlpass){
	return bossdlpost(dluser,dlpass)
}
export function yezhudlv(dluser,dlpass){
	return yezhudlpost(dluser,dlpass)
}
export function yezhurhmv(homeyard){
	return yezhurhmpost(homeyard)
}
export function yezhuzcv(zcuser,zcpass){
	return yezhuzcpost(zcuser,zcpass)
}
export function wuyedlv(dluser,dlpass){
	return wuyedlpost(dluser,dlpass)
}
export function wuyegllist(address){
	return wuyegllistpost(address)
}
export function wuyegltj(address,name,sex,phone,family,homeyard){
	return wuyegltjpost(address,name,sex,phone,family,homeyard)
}
export function yzdpwyd(village,uid){
	return yzdpwypost(village,uid)
}
export function yzhpwyd(id,uid,village){
	return yzhpwypost(id,uid,village)
}
export function yzcpwyd(id,uid,village){
	return yzcpwypost(id,uid,village)
}
export function bosszsxqd(){
	return bosszsxqpost()
}
export function bosszsxqhzd(address){
	return bosszsxqhzpost(address)
} 
export function wyxgxxd(id,name,phone,sex,email){
	return wyxgxx(id,name,phone,sex,email)
} 
export function wykzjdpjd(id){
	return wykzjdpjpost(id)
} 


//论坛
export function yezhutljs(village,uid){
	return yezhultjspost(village,uid)
}
export function yezhutlxq(id,uid){
	return yezhultxqpost(id,uid)
}
export function yezhutlzan(id,uid){  //点赞
	return yezhultzan(id,uid)
}
export function yezhuplzs(uid){  //评论
	return yezhultpinglun(uid)
}
export function pinglunhffn(name){  //评论回复	
	return pinglunhuifu(name)
}
export function pinglunsrfn(name){  //评论回复pinglunshuru
	return pinglunshuru(name)
}
export function yezhupinglunfns(uid,title,name,names){  //评论输入
	return yezhupinglunss(uid,title,name,names)
}
export function yezhultfbfn(fd){  //论坛图片
	return yezhuluntanfb(fd)
}
export function yezhultfbfns(e){  //图片清空
	return luntantupians(e)
}
export function yezhultfbsn(name,con,village,uid,img,toux){  //论坛发布
	return yezhuluntantjes(name,con,village,uid,img,toux)
}
//物业邮包编辑
export function wuyeyoubaobjfn(village){
	return wuyeyoubaobj(village)
}
//活动
export function wuyehd(village){
	return wuyehdpost(village)
}
export function wuyehdtj(village,name,con){
	return wuyehdtjpost(village,name,con)
}
export function yezhuhd(village,id){
	return yezhuhdpost(village,id)
}
export function yezhuhds(id,uid,village){
	return yezhuhdposts(id,uid,village)
}

export function wuyetz(village,name,con){
	return wuyenotice(village,name,con)
}


export function yezhu_spackage(village,address){
	return spackage(village,address)
}

export function yezhu_antee(village){
	return wuyeantee(village)
}
export function wuye_bx(con,village,address){
	return wuyebaoxiu(con,village,address)
}


export function wuye_addpackage(name,address,phone,delivery,village){
	return addpackage(name,address,phone,delivery,village)
}

export function wuye_showpackage(address){
	return showpackage(address)
}

export function yezhu_showhouse(address,family){
	return showhouse(address,family)
}

export function yezhu_addhouse(name,address,family,homeyard){
	return addhouse(name,address,family,homeyard)
}


export function parcel_makesure(id,address){
	return wuyemakesure(id,address)
}

export function yezhu_addres(village){
	return yezhuaddress(village)
}

export function wuye_bxs(village,address){
	return wuyejieshou(village,address)
}

export function wuyetzs(village){
	return wuyenotices(village)
}
export function wuye_box(id,village,address){
	return wuyeboxs(id,village,address)
}
export function wuye_boxs(village){
	return yezhuaddresss(village)
}



// 业主  已参加的活动  展示
export function yezhu_activity(id,village){
	return showactivity(id,village)
}


// 业主  访客邀请
export function fangkefn(title,name){
	return fangkepost(title,name)
}
// 换头像
export function touxiangfn(fd,id){
	return touxiangpost(fd,id)
}
// 物业换头像
export function wytouxiangfn(fd,id){
	return wytouxiangpost(fd,id)
}
//boss社区
// 换头像
export function bosssqfn(){
	return bossshequ()
}
//boss 查看物业 人数

export function boss_lwuye(village){
	return bosslookwuye(village)
}


//boss 添加物业 人数

export function boss_awuye(name,village,user,pass,phone){
	return bossaddwuye(name,village,user,pass,phone)
}


//boss 添加物业 人数展示

export function boss_awuyeshow(village){
	return bossaddwuyeshow(village)
}


//业主修改信息

export function yezhu_revisemsg(id,name,phone,email,sex){
	return yezhurevise(id,name,phone,email,sex)
}