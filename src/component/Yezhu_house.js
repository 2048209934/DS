import React, { Component } from 'react';

import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';

class Yezhuhouse extends Component {
	componentDidMount(){
		$(".admin_con").hide();
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        this.props.yezhu_showhouse(yezhusjjson[0].address,yezhusjjson[0].family);
	}
	componentWillUnmount(){
		$(".admin_con").show();
	}
    go=function(){
        window.history.go(-1);
    }
    wyxq(){
        $(".add_message").slideDown();
    }
    wysq(){
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        this.props.yezhu_addhouse(this.refs.zh_name.value,yezhusjjson[0].address,yezhusjjson[0].family);
        this.refs.zh_name.value='';
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
                    <img src="../../../images/addpeople.png" alt="" />
                    添加住户
                </p>
                <div className="add_message">
                    <div>
                        <span>住户姓名</span>
                        <input ref="zh_name" type="text" placeholder="住户姓名" />
                    </div>
                    <button onClick={this.wysq.bind(this)}>确定</button>
                </div>


                <div className="my_house clear">
                    <div className="xq_name left">
                        <p>北京半岛馨苑</p>
                        <p>一单元 101</p>
                    </div>
                    <span className="my_count right">共{this.props.data.length}人</span>
                </div>
                <ul className="house_list">
                {
                    this.props.data.map(function(con,i){
                        return (
                            <li key={i}>{con.owner==1?'户主':'家属'}：{con.name}</li>
                        )
                    })
                }
                    
                </ul>
            </div>  	
        )
    }
}

export default connect(e=>({data:e.add_yezhuhouse}),action)(Yezhuhouse);