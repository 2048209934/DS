import React, { Component } from 'react';
import  Wuyemake from './Wuye_make';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuyeamend extends Component {
    componentDidMount(){
    $(".admin_con").hide()
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  go=function(){
    window.history.go(-1)
  }
  render() {
    return (
        <Router>
    	  	<div className="revise">
           <Route exact path='/wuye/index/me/amend' render={() => (
            <div className="self_means">
                <div className="daturn_top">
                    <span onClick={this.go}><img src="../../../images/tip.png" alt=""/></span>
                    <span>个人资料</span>
                </div>
                <div className="daturn_bottom">
                    <div className="wuye_head"></div>
                    <p>游客</p>
                    <p>大圣城市花园</p>
                </div>
                <Link to="/wuye/index/me/amend/make">
                     <div className="put">修改信息</div>
                </Link>
            </div>
             )} />
            <Route path="/wuye/index/me/amend/make" component={Wuyemake}/>  
        </div>
      </Router>
    );
  }
}

export default Wuyeamend;