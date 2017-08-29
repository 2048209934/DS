import {yezhudlpost,yezhurhmpost,yezhuzcpost,wuyedlpost} from './my'
import {wuyehdpost,wuyehdtjpost,yezhuhdpost,yezhuhdposts,yezhultjspost,yezhultxqpost,yezhultzan,yezhultpinglun} from './mds'
import {wuyenotice} from './ghj'
import {spackage} from './hcc'


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

