import {yezhudlpost,yezhurhmpost,yezhuzcpost,wuyedlpost} from './my'
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

<<<<<<< HEAD

export function wuyetz(village,name,con){
	return wuyenotice(village,name,con)
}

=======
export function yezhu_spackage(village,address){
	return spackage(village,address)
}
>>>>>>> origin/master
