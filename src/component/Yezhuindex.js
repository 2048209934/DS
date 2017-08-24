import React, { Component } from 'react';
import './../css/yezhuindex.css';
import Yezhuzhuzhe from './Yezhuzhuzhe';
import Yezhusteward from './Yezhusteward';
import Yezhushequ from './Yezhushequ';
import Yezhume from './Yezhume';
import  YezhuAccept from './Yezhu_accept';
import  YezhuPackage from './Yezhu_package';
import  YezhuShare from './Yezhu_share';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Yezhuindex extends Component {
  submits=function(){
    var admin_one=document.getElementById("admin_one")
    var admin_two=document.getElementById("admin_two")
    var admin_word=document.getElementById("admin_word")
      admin_one.style.display="none",
      admin_two.style.display="block",
      admin_word.style.color="#ff9500"
  }
	componentDidMount(){
		setTimeout(()=>{
			var yezhusj=window.sessionStorage.getItem('yezhu')
			var yezhusjjson=JSON.parse(yezhusj)
			console.log(yezhusjjson)
			if(yezhusjjson==0){
				$(".wrap").parent().parent().html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
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
                 <Link to="/yezhu/index">
                    <p className="admin_one" id="admin_one" onClick={this.submits}><img src="../images/account_eight.png" alt=""/></p>
                    <p className="admin_two" id="admin_two"><img src="../images/account_server.png" alt=""/></p>
                    <p className="admin_word" id="admin_word">住这儿</p>
                </Link>
                <Link to="/yezhu/index/steward">
                     <p className="admin_one" id="admin_one" onClick={this.submits}><img src="../images/account_five.png" alt=""/></p>
                    <p className="admin_two" id="admin_two"><img src="../images/account_six.png" alt=""/></p>
                    <p>管家</p>
                </Link>
                <Link to="/yezhu/index/shequ">
                    <p className="admin_one" id="admin_one" onClick={this.submits}><img src="../images/account_four.png" alt=""/></p>
                    <p className="admin_two" id="admin_two"><img src="../images/account_three.png" alt=""/></p>
                    <p>社区</p>
                </Link>
                <Link to="/yezhu/index/me">
                     <p className="admin_one" id="admin_one" onClick={this.submits}><img src="../images/account_one.png" alt=""/></p>
                    <p className="admin_two" id="admin_two"><img src="../images/account_two.png" alt=""/></p>
                    <p>我</p>
                </Link>
            </div>
          </div>    
      </Router>
    );
  }
}

export default connect(e=>({data:e.yezhudata}),action)(Yezhuindex);