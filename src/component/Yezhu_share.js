import React, { Component } from 'react';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class YezhuShare extends Component {
		componentDidMount(){
			$(".admin_con").hide()
		}
		componentWillUnmount(){
			$(".admin_con").show()
		}
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <div className="package_head">
                    <img className="back" src="../../images/arrow.png" onClick={this.fn} alt="" />
                    <img className="more" src="../../images/circle.png" alt="" />
                    邻里分享
                </div>
                <div className="live">
                    <div className="lives">
                        <p className="pl_detail">
                            <img className="left" src="../../images/guanjia_03.jpg" alt="" />
                            <span className="left">白桐</span>
                        </p>
                        <p className="pl_content">
                            【今夜山区有雨 注意防范】今天白天阴转多云，早晨有轻雾并有分散小阵雨，最高气温30℃；夜间多云间阴，山区有阵雨或雷阵雨，最低气温23℃，受轻雾影响，今晨能见度不...
                        </p>
                        <img className="prompt" src="../../images/prompt_03.jpg" alt="" />
                        <div className="time">23小时前</div>
                    </div>
                </div>
                <div className="dianzan">
                    <span className="left">已有0人点赞</span>
                    <button className="right"><img src="../../images/kkk.png" alt="" /></button>

                </div>
                <div className="publish">
                    <input type="text" placeholder="评论" />
                    <button>发表</button>
                </div>
            </div>
        )
    }
}

export default YezhuShare;