import React, { Component } from 'react';
import Wuyeindex from './Wuyeindex';
import Btn from './Btn'
import Alert from './Alert';
import './../css/wuye.css'
import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Wuye extends Component {
	wuyedl(e){
		if ($("#wuyedluser").val()==''||$("#wuyedlpass").val()=='') {
			$(".mask").show()
			e.preventDefault()
		} else{
			this.props.wuyedlv($("#wuyedluser").val(),$("#wuyedlpass").val())
		}
	}
  render() {
    return (
       <Router history={history}>
    	  <div>
    	  	<Route exact path='/wuye' render={() => (
    	  		<div className="wuyelogin">
    	  			<div className="wuyedenglu">
    	  				<h2>欢迎登录</h2>
    	  				<div>
    	  					<span>账号</span>
    	  					<input type="text" id="wuyedluser" placeholder="请输入" />
    	  				</div>
    	  				<div>
    	  					<span>密码</span>
    	  					<input type="password" id="wuyedlpass"  placeholder="请输入" />
    	  				</div>    	  	  	  				
    	  				<Link to="/wuye/index" onClick={this.wuyedl.bind(this)}><Btn btnVal="登 录" /></Link>
    	  			</div>
    	  			<Alert data="请输入内容" />
            </div>
           )} />  
          <Route path="/wuye/index" component={Wuyeindex} />
        </div>
    	 </Router>  

    );
  }
}

export default connect(e=>({data:e}),action)(Wuye);