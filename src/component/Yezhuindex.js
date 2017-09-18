import React, { Component } from 'react';
import './../css/yezhuindex.css';
import Yezhuzhuzhe from './Yezhuzhuzhe';
import Yezhusteward from './Yezhusteward';
import Yezhushequ from './Yezhushequ';
import Yezhume from './Yezhume';
import  YezhuAccept from './Yezhu_accept';
import  YezhuPackage from './Yezhu_package';
import  YezhuShare from './Yezhu_share';
import OldMenuLink from './Navs';
import Yezhuadd from './Yezhu_address';
import imgs1 from "./images/account_eight.png";
import imgs2 from "./images/account_server.png";
import imgs3 from "./images/account_five.png";
import imgs4 from "./images/account_six.png";
import imgs5 from "./images/account_four.png";
import imgs6 from "./images/account_three.png";
import imgs7 from "./images/account_one.png";
import imgs8 from "./images/account_two.png";
import $ from 'jquery';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Yezhuindex extends Component {
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
			var yezhusj=window.sessionStorage.getItem('yezhu')
			var yezhusjjson=JSON.parse(yezhusj)
			if(yezhusjjson==0){
				$(".wrap").parent().parent().html(`
					<div>
						<div style="height:50px; line-height:50px; text-align:center; position:relative; border-bottom:1px solid #ccc; font-size:16px;">
							<img id="hyezhudl" src="../images/arrow.png" alt="" style="width:20px; height:22px; position:absolute; top:30%; left:15px;">登录
						</div>
						<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">密码错误，请重新输入</div>
					<div>
					`)
				$("#hyezhudl").click(function(){
					window.history.go(-1)
				})
			}
		},300)
		/*setTimeout(()=>{
//			console.log(this.props.data)
			var yezhudata=this.props.data
			if(yezhudata==0){
				$(".wrap").parent().parent().html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
			}
		},10)*/
	}
  render() {	
    return (
      <Router history={history}>
  		  <div>
              <Route path="/yezhu/index" exact component={Yezhuzhuzhe} />
              <Route path="/yezhu/index/steward" component={Yezhusteward} />
              <Route path="/yezhu/index/shequ" component={Yezhushequ} />
              <Route path="/yezhu/index/me" component={Yezhume} />
              <Route path="/yezhu/index/accept" component={YezhuAccept}/>
              <Route path="/yezhu/index/package" component={YezhuPackage}/>
              <Route path="/yezhu/index/share" component={YezhuShare}/>
              <Route path="/yezhu/index/address" component={Yezhuadd}/>
           
    
              <div className="admin_con">
              	<OldMenuLink to={'/yezhu/index'} activeOnlyWhenExact={true} label={'住这儿'} img1={imgs1} img2={imgs2}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/steward'} label={'管家'} img1={imgs3} img2={imgs4}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/shequ'} label={'社区'} img1={imgs5} img2={imgs6}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/me'} label={'我'} img1={imgs7} img2={imgs8}></OldMenuLink>
            </div>
          </div>    
      </Router>
    )
  }
}

export default connect(e=>({data:e.yezhudata}),action)(Yezhuindex);