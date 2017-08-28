import {yezhudlpost,yezhurhmpost,yezhuzcpost,wuyedlpost} from './my'
import {wuyehdpost,wuyehdtjpost} from './mds'
import {wuyenotice,wuyeantee} from './ghj'
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




export function wuyehd(village){
	return wuyehdpost(village)
}
export function wuyehdtj(village,name,con){
	return wuyehdtjpost(village,name,con)
}

export function wuyetz(village,name,con){
	return wuyenotice(village,name,con)
}


export function yezhu_spackage(village,address){
	return spackage(village,address)
}

export function yezhu_antee(village,address,con){
	return wuyeantee(village,address,con)
}


