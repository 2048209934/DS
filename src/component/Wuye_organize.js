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
import Btn from './Btn';
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
if($(".orgin").val()!=""){
	  	var wuyesjjson=JSON.parse(window.sessionStorage.getItem('wuye'))
  	this.props.wuyehdtj(wuyesjjson[0].village,wuyesjjson[0].name,$(".orgin").val())
  	$(".orgin").val(" ")
  	document.getElementById("organize").style.height="0"
  		$(".topsbtn").css("display","block")
}else{
	$(".organize p").css("opacity","1")
}
  }
  btnfn=function(){
  	$(".topsbtn").css("display","none")
  	document.getElementById("organize").style.height="7.5rem"
  }
  render() {
    return (
    	  <div>{console.log(this.props.data)}
            <div className="notice_editor">
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>组织活动</span>
            </div>
            <div className="topsbtn" onClick={this.btnfn}><Btn btnVal="发表活动" ></Btn></div>
            <div className="organize" id="organize">
            <textarea  className="orgin"></textarea>
            <p>不能为空</p>
            <div onClick={this.fns.bind(this)}><Btn btnVal="发布" ></Btn></div>
           
            </div>
            <ul className="orgin_con">

            {this.props.data.map(function(e,i){
	return        <li key={i} className="orgin_box">
                    <p><span>发布人:</span><span>{e.name}</span></p>
                    {/* <p><span>大圣湾棋牌欢乐会</span></p>
                    <p><span>活动时间:</span><span>2017-8-24-2017-8-28</span></p>*/}
                    <p></p>
                    <p><span>活动内容:</span>{e.con}</p>
                    <p><span><img src="../../images/time.png" alt=""/></span><span>{e.time.substr(0,19).split("T").join("   ")}</span></p>
                    <p><span><img src="../../images/people.png" alt=""/></span><span>{e.nums==null?0:e.nums.split("?").length}</span></p>    
                    <div className="orgin_con"></div>
                </li>
})}

            </ul>
        </div>
    );
  }
}

export default connect(e=>({data:e.huodong}),action)(WuyeOrganize);