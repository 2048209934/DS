import React, { Component } from 'react';

import $ from 'jquery'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import  Alert from './Alert';
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory';

import imgs1 from "./images/arrow.png";
import imgs2 from "./images/addwuye.png";

const history = createHistory();
class Bosswuye extends Component {
	componentDidMount(){
        var xq=window.sessionStorage.getItem('xq');
        this.props.boss_awuyeshow(xq);
        $(".boss_con").hide()
    }
    componentWillUnmount(){
        $(".boss_con").show()
    }
    wyxq(){
        $(".add_wuyes").slideDown();
    }
    wysq(){
        if(this.refs.username.value==''||this.refs.phone.value==''){
            $('.mask').show();
        }else{
            function random(min,max){
                return parseInt(Math.random()*((max+1)-min)+min);
            };
            var xq=window.sessionStorage.getItem('xq');
            var time=new Date().getTime();
            this.props.boss_awuye(this.refs.username.value,xq,time,random(100000,999999),this.refs.phone.value)
            $(".add_wuyes").slideUp();
        }
        
    }
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <Route>
                <div className="bj">
                    <Alert data="请输入内容"/>
                    <div className="heads">
                        <img className="back" src={imgs1} onClick={this.fn} alt="" />
                        物业详情
                    </div>
                    <p className="add_wuye clear"  onClick={this.wyxq}>
                        <img className="left" src={imgs2} alt="" />
                        <span className="left">添加物业</span>
                    </p>

                    <div className="add_wuyes">
                        <div>
                            <span>物业姓名</span>
                            <input ref="username" type="text" placeholder="物业姓名" />
                        </div>
                        <div>
                            <span>联系方式</span>
                            <input ref="phone" type="text" placeholder="联系方式" />
                        </div>
                        <button onClick={this.wysq.bind(this)}>确定</button>
                    </div>
                    <ul className="add_wydetail">
                        {
                            this.props.data.map(function(v,i){
                                return (
                                    <li key={i}>
                                        <p>物业姓名：{v.name}</p>
                                        <p>联系方式：{v.phone}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Route>
        )
    }
}


export default connect(e=>({data:e.bossawuye}),action)(Bosswuye);