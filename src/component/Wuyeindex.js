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
import OldMenuLink from './Navs';

import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory';

import imgs1 from "./images/arrow.png";
import imgs2 from "./images/account_eight.png";
import imgs3 from "./images/account_server.png";
import imgs4 from "./images/account_five.png";
import imgs5 from "./images/account_six.png";
import imgs6 from "./images/account_four.png";
import imgs7 from "./images/account_three.png";
import imgs8 from "./images/account_one.png";
import imgs9 from "./images/account_two.png";


const history = createHistory();

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
				$(".Admin").html(`
					<div>
						<div style="height:50px; line-height:50px; text-align:center; position:relative; border-bottom:1px solid #ccc; font-size:16px;">
							<img id="hwuyedl" src={imgs1} alt="" style="width:20px; height:22px; position:absolute; top:30%; left:15px;">登录
						</div>
						<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>
					<div>
					`)
				$("#hwuyedl").click(function(){
					window.history.go(-1)
				})
			}
		},1000)
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
      <Router history={history}>
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
                <OldMenuLink to={'/wuye/index'} activeOnlyWhenExact={true} label={'住这儿'} img1={imgs2} img2={imgs3}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/steward'} label={'管家'} img1={imgs4} img2={imgs5}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/shequ'} label={'社区'} img1={imgs6} img2={imgs7}></OldMenuLink>
              	<OldMenuLink to={'/wuye/index/me'} label={'我'} img1={imgs8} img2={imgs9}></OldMenuLink>
            </div>
        </div> 
      </Router>    
    );
  }
}

export default connect(e=>({data:e.wuyedata}),action)(Wuyeindex);