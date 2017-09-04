import React, { Component } from 'react';
import  Yezhumake from './Yezhu_make';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Yezhuamend extends Component {
	componentDidMount(){
		$(".admin_con").hide()
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
  go=function(){
    window.history.go(-1)
  }
  back=function(){
    window.location.href="http://localhost:3000/yezhu"
  }
  render() {
    return (
        <Router>
    	  	<div className="revise">
                <Route exact path='/yezhu/index/me/amend' render={() => (
                    <div className="self_means">
                        <p className="head" id="head">
                            <img onClick={this.go} src="../../../images/arrow.png" alt="" />
                            <span>个人资料</span>
                        </p>
                        <div className="SC">
                            <div className="daturn_bottom">
                                <div className="wuye_head"></div>
                                <p>游客</p>
                                <p>大圣城市花园</p>
                            </div>
                        </div>
                        <Link to="/yezhu/index/me/amend/make">
                             <div className="put">修改信息</div>
                        </Link>
                        <button onClick={this.back} className="quit">退出登录</button>
                        
                    </div>
                 )} />
                <Route path="/yezhu/index/me/amend/make" component={Yezhumake}/>  
                
            </div>
        </Router>
    );
  }
}

export default Yezhuamend;