import React, { Component } from 'react';
import  Wuyemake from './Wuye_make';
import $ from 'jquery';
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
  back=function(){
    window.location.href="http://localhost:3000/wuye"
  }
  render() {
  	var yezhusj=window.sessionStorage.getItem('wuye');
    var yezhusjjson=JSON.parse(yezhusj);
  	var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
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
                   <img className="wuye_head" src={yezhusjjson[0].toux}/>
                    <p>{wuye[0].name}</p>
                    <p>{wuye[0].village}</p>
                </div>
                <Link to="/wuye/index/me/amend/make">
                     <div className="put">修改信息</div>
                </Link>
                <button onClick={this.back} className="quit">退出登录</button>
            </div>
             )} />
            <Route path="/wuye/index/me/amend/make" component={Wuyemake}/>  
        </div>
      </Router>
    );
  }
}

export default Wuyeamend;