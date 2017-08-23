import React, { Component } from 'react';
import './../css/wuye_organize.css';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class WuyeOrganize extends Component {
    componentDidMount(){
    $(".admin_con").hide()
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  ok=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	  <div>
            <div className="notice_editor">
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>组织活动</span>
            </div>
            <div className="organize">
                <input type="text" className="orgin"/>
                <div className="orgin_btn">发布</div>
            </div>
            <ul className="orgin_con">
                <li className="orgin_box">
                    <p><span>发布人:</span><span>老马</span></p>
                    <p><span>大圣湾棋牌欢乐会</span></p>
                    <p><span>活动时间:</span><span>2017-8-24-2017-8-28</span></p>
                    <p><span><img src="../../images/time.png" alt=""/></span><span>2017.8.23</span></p>
                    <p><span><img src="../../images/people.png" alt=""/></span><span>23</span></p>        
                </li>
            </ul>
        </div>
    );
  }
}

export default WuyeOrganize;