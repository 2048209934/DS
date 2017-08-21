import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Yezhuzhuzhe extends Component {
    /*componentDidMount(){
        if(window.addEventListener){
            document.addEventListener('scroll', this.handleScroll);
        }else{
            document.attachEvent('onscroll', this.handleScroll);
        }
    }
    handleScroll=function (e) {
        var head=document.getElementById('head');
        if((document.body.scrollTop || document.documentElement.scrollTop)>=0){ 
            
        }
        else{
            
        }
    }*/
    render() {
        return (
            <Router>
        	    <div className="wrap">
                    {/*header*/}
                    <p className="head" id="head">
                        <img src="../images/xiaoxi.png" alt="" />
                        <span>北京半岛馨苑</span>
                    </p>
                    {/*banner*/}
        	  	    <div className="banner">
                        <img src="../images/yezhubanner.jpg" alt="" />
                    </div>
                    {/*ewm and yb*/}
                    <div className="accept clear">
                        <div className="accept_left left">
                            <div className="word left">
                                <p>访客邀请</p>
                                <p>扫码过门禁</p>
                            </div>
                            <div className="icon left">
                                <img src="../images/ewm2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="accept_left accept_right right">
                            <div className="word left">
                                <p>邮包</p>
                                <p>收包更便捷</p>
                            </div>
                            <div className="icon left">
                                <img src="../images/parcel.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*fresh things*/}
                    <p className="fresh">社区新鲜事</p>
                    {/*content*/}
                    <div className="content">
                        <div className="box">
                            <p className="name clear">
                                <img className="left" src="../images/guanjia_03.jpg" alt="" />
                                <span className="left">白桐</span>
                                <span className="left">在</span>
                                <span className="left">邻里分享</span>
                            </p>
                            <p>2017年8月20日</p>
                            <p>星期日</p>
                            <p>今日限行</p>
                            <p>【今夜山区有雨 注意防范】今天白天阴转多云，早晨有轻雾并有分散小阵雨，最高气温30℃；夜间多云间阴，山区有阵雨或雷阵雨，最低气温23℃，受轻雾影响，今晨能见度不...</p>
                            <img className="prompt" src="../images/prompt_03.jpg" alt="" />
                            <div className="time">23小时前</div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Yezhuzhuzhe;