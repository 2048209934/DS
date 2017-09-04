import React, { Component } from 'react';
import  Wuyeamend from './Wuye_amend';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action';
import {connect} from 'react-redux';
class Wuyeme extends Component {
	    chengfn=function(e){
    var ev=e||window.event
    var files
    var yezhusj=window.sessionStorage.getItem('wuye');
    var yezhusjjson=JSON.parse(yezhusj);	
    //console.log(yezhusjjson[0].id)
    //this.props.touxiangfn(yezhusjjson[0].id)
    files=ev.target.files
    var fd=new FormData();  //表单处理数据的方法
		for(var i=0;i<files.length;i++){
		fd.append('file['+i+']',files[i]) //用append方法以键值对的方式保存
    }
		this.props.wytouxiangfn(fd,yezhusjjson[0].id)
		}
  render() {
  	        var yezhusj=window.sessionStorage.getItem('wuye');
        var yezhusjjson=JSON.parse(yezhusj);
    return (
      <Router>
    	  <div>
            <Route exact path='/wuye/index/me' render={() => (
                <div className="myself">
                    <div className="myself_top">
                      <a href="#" className="file"  id="zpd">
                          <p id="pps"><img src={this.props.data==""?yezhusjjson[0].toux:this.props.data}/></p>
                          <input type="file" onChange={this.chengfn.bind(this)} name="" id="file"/>
                      </a>
                      <div className="myself_word">
                          <p>游客</p>
                          <p>大圣城市花园</p>
                      </div>
                      <Link to="/wuye/index/me/amend">
                           <div className="arrow">></div>
                      </Link>
                  </div>
                  <div className="myself_nows">
                      <div className="now_left">
                          <p>评价</p>
                          <p>内容</p>
                      </div> 
                      <div className="now_right">
                          <p>评价分数</p>
                          <p>0</p>
                      </div> 
                  </div>
                </div>
            )} />
            <Route path="/wuye/index/me/amend" component={Wuyeamend}/>  
          </div>
        </Router>
    );
  }
}
export default connect(e=>({data:e.wuyeyx}),action)(Wuyeme);