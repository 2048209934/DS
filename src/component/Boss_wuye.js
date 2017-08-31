import React, { Component } from 'react';

import $ from 'jquery'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import * as action from './../action/action'
import {connect} from 'react-redux';

class Bosswuye extends Component {
	componentDidMount(){
        $(".boss_con").hide()
    }
    componentWillUnmount(){
        $(".boss_con").show()
    }
    wyxq(){
        $(".add_wuyes").slideDown();
    }
    wysq(){
        $(".add_wuyes").slideUp();
    }
    fn=function(){
        window.history.go(-1);
    }
    render() {
        return (
            <Route>
                <div className="bj">
                    <div className="heads">
                        <img className="back" src="../../../images/arrow.png" onClick={this.fn} alt="" />
                        物业详情
                    </div>
                    <p className="add_wuye clear"  onClick={this.wyxq}>
                        <img className="left" src="../../../images/addwuye.png" alt="" />
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
                        <li>
                            <p>物业姓名：</p>
                            <p>联系方式：</p>
                        </li>
                        <li>
                            <p>物业姓名：</p>
                            <p>联系方式：</p>
                        </li>
                        <li>
                            <p>物业姓名：</p>
                            <p>联系方式：</p>
                        </li>
                        <li>
                            <p>物业姓名：</p>
                            <p>联系方式：</p>
                        </li>
                        <li>
                            <p>物业姓名：</p>
                            <p>联系方式：</p>
                        </li>
                    </ul>
                </div>
            </Route>
        )
    }
}

export default Bosswuye;