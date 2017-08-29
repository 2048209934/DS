import {yezhudlpost,yezhurhmpost,yezhuzcpost,wuyedlpost,wuyegllistpost,wuyegltjpost} from './my'
import {wuyehdpost,wuyehdtjpost,yezhuhdpost,yezhuhdposts} from './mds'
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
export function wuyegllist(address){
	return wuyegllistpost(address)
}
export function wuyegltj(address,name,sex,phone,family,homeyard){
	return wuyegltjpost(address,name,sex,phone,family,homeyard)
}




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

