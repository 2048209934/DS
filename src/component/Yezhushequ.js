import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhushequ extends Component {
    /*componentDidMount(){
        var ul=document.getElementsByTagName('ul');
        var li=document.getElementById('li');
        var newLi=li.cloneNode(true);
        function number(x){
            var ul=document.getElementsByTagName('ul');
            var li=document.getElementById('li');
            var newLi=li.cloneNode(true);
            for(var k=0; k<x; k++){
                ul.appendChild(newLi);
            }
        }
        number(8);
        window.onscroll=function(){
            var Screen = document.documentElement.clientHeight;
            var sTop =document.body.scrollTop||document.documentElement.scrollTop;
            var sHeight = document.body.scrollHeight;
            if(sTop+Screen>=sHeight-50) {
                number(5);
            }
        }
    }*/
  render() {
    return (
        <Router>
    	    <div>
    	  	    <div className="wrap">
                    {/*header*/}
                    <p className="head" id="head">
                        <span>社区</span>
                    </p>
                    {/*content*/}
                    <ul className="contents">
                        <li id="li" className="box">
                            <p className="name clear">
                                <img className="left" src="../../images/guanjia_03.jpg" alt="" />
                                <span className="left">白桐</span>
                                <span className="left">在</span>
                                <span className="left">邻里分享</span>
                            </p>
                            <p>2017年8月20日</p>
                            <p>星期日</p>
                            <p>今日限行</p>
                            <p>【今夜山区有雨 注意防范】今天白天阴转多云，早晨有轻雾并有分散小阵雨，最高气温30℃；夜间多云间阴，山区有阵雨或雷阵雨，最低气温23℃，受轻雾影响，今晨能见度不...</p>
                            <img className="prompt" src="../../images/prompt_03.jpg" alt="" />
                            <div className="timess">23小时前</div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </Router>
    )
  }
}

export default Yezhushequ;