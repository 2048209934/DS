import React, { Component } from 'react';
import  Yezhumake from './Yezhu_make';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Yezhuamend extends Component {
  go=function(){
    window.history.go(-1)
  }
  render() {
    return (
        <Router>
    	  	<div className="revise">
           <Route exact path='/yezhu/index/me/amend' render={() => (
            <div className="self_means">
                <div className="daturn_top">
                    <span onClick={this.go}>返回</span>
                    <span>个人资料</span>
                </div>
                <div className="daturn_bottom">
                    <div className="wuye_head"></div>
                    <p>游客</p>
                    <p>大圣城市花园</p>
                </div>
                <Link to="/yezhu/index/me/amend/make">
                     <div className="put">修改信息</div>
                </Link>
            </div>
             )} />
            <Route path="/yezhu/index/me/amend/make" component={Yezhumake}/>  
        </div>
      </Router>
    );
  }
}

export default Yezhuamend;