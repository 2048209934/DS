import React, { Component } from 'react';
import  Yezhumake from './Yezhu_make';

import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import imgs1 from "./images/arrow.png";

import createHistory from 'history/createHashHistory'
const history = createHistory();
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
    window.location.href="http://www.sdxcjz.com/template/mds/build"
  }
  render() {
  	var yezhusj=window.sessionStorage.getItem('yezhu');
    var yezhusjjson=JSON.parse(yezhusj);
  	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
    return (
        <Router history={history}>
    	  	<div className="revise">
                <Route exact path='/yezhu/index/me/amend' render={() => (
                    <div className="self_means">
                        <p className="head" id="head">
                            <img onClick={this.go} src={imgs1} alt="" />
                            <span>个人资料</span>
                        </p>
                        <div className="SC">
                            <div className="daturn_bottom">
                            <img className="wuye_head" src={yezhusjjson[0].imgs}/>
                                <p>{yezhu[0].name}</p>
                                <p>{yezhu[0].address}</p>
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