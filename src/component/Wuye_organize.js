import React, { Component } from 'react';
import './../css/wuye_organize.css';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';

class WuyeOrganize extends Component {
    componentDidMount(){
			var wuyesjjson=JSON.parse(window.sessionStorage.getItem('wuye'))
    	this.props.wuyehd(wuyesjjson[0].village)
    $(".admin_con").hide()
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  ok=function(){
    window.history.go(-1)
  }
  fns=function(){
  	var wuyesjjson=JSON.parse(window.sessionStorage.getItem('wuye'))
  	this.props.wuyehdtj(wuyesjjson[0].village,wuyesjjson[0].name,$(".orgin").val())
  }
  render() {
    return (
    	  <div>{console.log(this.props.data)}
            <div className="notice_editor">
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>组织活动</span>
            </div>
            <div className="organize">
                <input type="text" className="orgin"/>
                <div className="orgin_btn" onClick={this.fns.bind(this)}>发布</div>
            </div>
            <ul className="orgin_con">

            {this.props.data.map(function(e,i){
	return        <li key={i} className="orgin_box">
                    <p><span>发布人:</span><span>{e.name}</span></p>
                    {/* <p><span>大圣湾棋牌欢乐会</span></p>
                    <p><span>活动时间:</span><span>2017-8-24-2017-8-28</span></p>*/}
                    <p></p>
                    <p><span>活动内容:{e.con}</span></p>
                    <p><span><img src="../../images/time.png" alt=""/></span><span>{e.time.substr(0,19).split("T").join("   ")}</span></p>
                    <p><span><img src="../../images/people.png" alt=""/></span><span>{e.nums==null?0:e.nums.split("?").length}</span></p>        
                </li>
})}

            </ul>
        </div>
    );
  }
}

export default connect(e=>({data:e.huodong}),action)(WuyeOrganize);