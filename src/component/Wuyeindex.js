import React, { Component } from 'react';
import './../css/wuyeindex.css'
import Wuyezhuzhe from './Wuyezhuzhe'
import Wuyesteward from './Wuyesteward'
import Wuyeshequ from './Wuyeshequ'
import Wuyeme from './Wuyeme'
import  WuyeParcel from './Wuye_parcel';
import  WuyeGuarantee from './Wuye_guarantee';
import  WuyeNotice from './Wuye_notice';
import  WuyeOrganize from './Wuye_organize';
import OldMenuLink from './Navs'

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Wuyeindex extends Component {
//submits=function(){
//  var admin_one=document.getElementById("admin_one")
//  var admin_two=document.getElementById("admin_two")
//  var admin_word=document.getElementById("admin_word")
//    admin_one.style.display="none",
//    admin_two.style.display="block",
//    admin_word.style.color="#ff9500"
//}
	componentDidMount(){
		setTimeout(()=>{
			var wuyesj=window.sessionStorage.getItem('wuye')
			var wuyesjjson=JSON.parse(wuyesj)
			//console.log(wuyesjjson)
			if(wuyesjjson==0){
				$(".Admin").html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
			}
		},10)
		/*setTimeout(()=>{
//			console.log(this.props.data)
			var wuyedata=this.props.data
			if(wuyedata==0){
				$(".Admin").html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
			}
		*/
	}
  render() {
    return (
      <Router>
		    <div className="Admin">
            <Route path="/wuye/index" exact component={Wuyezhuzhe} />
            <Route path="/wuye/index/steward" component={Wuyesteward} />
            <Route path="/wuye/index/shequ" component={Wuyeshequ} />
            <Route path="/wuye/index/me" component={Wuyeme} />
            <Route path="/wuye/index/parcel" component={WuyeParcel}/>
            <Route path="/wuye/index/notice" component={WuyeNotice}/>
            <Route path="/wuye/index/organize" component={WuyeOrganize}/>
            <Route path="/wuye/index/guarantee" component={WuyeGuarantee}/>
            <div className="admin_con">
                <OldMenuLink to={'/wuye/index'} activeOnlyWhenExact={true} label={'住这儿'} img1={'../images/account_eight.png'} img2={'../images/account_server.png'}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/steward'} label={'管家'} img1={'../images/account_five.png'} img2={'../images/account_six.png'}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/shequ'} label={'社区'} img1={'../images/account_four.png'} img2={'../images/account_three.png'}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/me'} label={'我'} img1={'../images/account_one.png'} img2={'../images/account_two.png'}></OldMenuLink>
            </div>
        </div> 
      </Router>    
    );
  }
}

export default connect(e=>({data:e.wuyedata}),action)(Wuyeindex);