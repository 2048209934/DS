import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import $ from 'jquery';
import * as action from './../action/action'
import {connect} from 'react-redux';
import Btn from './Btn';

class Yezhuhuodong extends Component {
	componentDidMount(){
		$(".admin_con").hide()
	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
	this.props.yezhuhd(yezhu[0].address,yezhu[0].id)
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
	    fn=function(){
        window.history.go(-1);
    }
	    btnscf=function(e){
	    	var ev=e||window.event
	    	var id=ev.target.firstElementChild.innerHTML
	    	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
	    	this.props.yezhuhds(id,yezhu[0].id,yezhu[0].address)
	    }
	    lisfn=function(e){
//	    	var ev=e||window.event
//	    	if(ev.stopPropagation){
//		    ev.stopPropagation();
//               }else{
// 	            e.vcancelBubble=true;
//               }
//$($(".huodonguls li").eq(e)).css("transform","scale(2)")

	    	
	    	
	    }
    render() {
        return (
        	<div>
        	<div className="package_head">
        	{console.log(this.props.data)}
                    <img className="back" src="../../../images/arrow.png" onClick={this.fn} alt="" />
                    社区活动
                </div>
                <div>
                <ul className="huodonguls">
                {this.props.data.map(function(e,i){
                	return <div key={i}><li onClick={this.lisfn.bind(this,i)} className="orgin_box">
                    <p><span>发布人:</span><span>{e.name}</span></p>
                    {/* <p><span>大圣湾棋牌欢乐会</span></p>
                    <p><span>活动时间:</span><span>2017-8-24-2017-8-28</span></p>*/}
                    <p></p>
                    <p><span>活动内容:</span>{e.con}</p>
                    <p><span><img src="../../../images/time.png" alt=""/></span><span>{e.time.substr(0,19).split("T").join("   ")}</span></p>
                    <p><span><img src="../../../images/people.png" alt=""/></span><span>{e.nums==""?0:e.nums==null?0:e.nums.split("?").length}</span></p>    
                    <div className="orgin_con"></div>
                </li>
                    <div  className={e.obes=="false"?"lisfootcolor2 huodbtn":"lisfootcolor1 huodbtn"} onClick={this.btnscf.bind(this)}><span className="btnspan">{e.id}</span>{e.obes=="false"?"参加":"已参加"}</div>
                    </div>
                }.bind(this))}

                </ul>
                </div>
        	</div>
        	        )
    }
}

export default connect(e=>({data:e.yezhuhuodong}),action)(Yezhuhuodong);