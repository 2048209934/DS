import React, { Component } from 'react';
import Bossindex from './Bossindex';
import Alert from './Alert';
import Btn from './Btn'
import './../css/boss.css'
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

class Boss extends Component {
	bossdl(e){
		if ($("#bossdluser").val()==''||$("#bossdlpass").val()=='') {
			$(".mask").show()
			e.preventDefault()
		} else{
			this.props.bossdlv($("#bossdluser").val(),$("#bossdlpass").val())
		}
	}
  render() {
    return (
    	 <Router history={history}>
    	  <div>
    	  	<Route exact path='/boss' render={() => (
    	  		<div className="bosslogin">
    	  			<div className="bossdenglu">
    	  				<h2>欢迎登录</h2>
    	  				<div>
    	  					<span>账号</span>
    	  					<input type="text" id="bossdluser" placeholder="请输入" />
    	  				</div>
    	  				<div>
    	  					<span>密码</span>
    	  					<input type="password" id="bossdlpass"  placeholder="请输入" />
    	  				</div>    	  	  	  				
    	  				<Link to="/boss/index" onClick={this.bossdl.bind(this)}><Btn btnVal="登 录" /></Link>
    	  			</div>
    	  			<Alert data="请输入内容" />
            </div>
           )} />  
          <Route path="/boss/index" component={Bossindex} />
        </div>
    	 </Router>      
    );
  }
}

export default connect(e=>({data:e}),action)(Boss);