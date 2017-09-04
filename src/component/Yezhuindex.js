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

import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';


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
						<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>
					<div>
					`)
				$("#hyezhudl").click(function(){
					window.history.go(-1)
				})
			}
		},10)
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
      <Router>
  		  <div>
              <Route path="/yezhu/index" exact component={Yezhuzhuzhe} />
              <Route path="/yezhu/index/steward" component={Yezhusteward} />
              <Route path="/yezhu/index/shequ" component={Yezhushequ} />
              <Route path="/yezhu/index/me" component={Yezhume} />
              <Route path="/yezhu/index/accept" component={YezhuAccept}/>
              <Route path="/yezhu/index/package" component={YezhuPackage}/>
              <Route path="/yezhu/index/share" component={YezhuShare}/>
    
              <div className="admin_con">
              	<OldMenuLink to={'/yezhu/index'} activeOnlyWhenExact={true} label={'住这儿'} img1={'../../../images/account_eight.png'} img2={'../../../images/account_server.png'}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/steward'} label={'管家'} img1={'../../../images/account_five.png'} img2={'../../../images/account_six.png'}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/shequ'} label={'社区'} img1={'../../../images/account_four.png'} img2={'../../../images/account_three.png'}></OldMenuLink>
              	<OldMenuLink to={'/yezhu/index/me'} label={'我'} img1={'../../../images/account_one.png'} img2={'../../../images/account_two.png'}></OldMenuLink>
            </div>
          </div>    
      </Router>
    )
  }
}

export default connect(e=>({data:e.yezhudata}),action)(Yezhuindex);