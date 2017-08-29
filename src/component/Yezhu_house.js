import React, { Component } from 'react';

import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Yezhuhouse extends Component {
	componentDidMount(){
		$(".admin_con").hide()
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
    go=function(){
        window.history.go(-1)
    }
    wyxq(){
        $(".add_message").slideDown();
    }
    wysq(){
        $(".add_message").slideUp();
    }
    render() {
        return (
    	    <div>
                {/*header*/}
                <p className="head" id="head">
                    <img onClick={this.go} src="../../../images/arrow.png" alt="" />
                    <span>我的房屋</span>
                </p>

                <p className="add_house" onClick={this.wyxq}>
                    <img src="../../../images/addressbook.png" alt="" />
                    添加住户
                </p>
                <div className="add_message">
                    <div>
                        <span>住户姓名</span>
                        <input type="text" placeholder="户主姓名" />
                    </div>
                    <div>
                        <span>联系方式</span>
                        <input type="text" placeholder="联系方式" />
                    </div>
                    <button onClick={this.wysq.bind(this)}>确定</button>
                </div>


                <div className="my_house clear">
                    <div className="xq_name left">
                        <p>北京半岛馨苑</p>
                        <p>一单元 101</p>
                    </div>
                    <span className="my_count right">0人</span>
                </div>
                <ul className="house_list">
                    <li>户主：马东升</li>
                    <li>家属：孟燏</li>
                    <li>家属：xxx</li>
                    <li>家属：xxx</li>
                    <li>家属：xxx</li>
                </ul>
            </div>  	
        )
    }
}

export default Yezhuhouse;