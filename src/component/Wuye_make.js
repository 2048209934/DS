import React, { Component } from 'react';
import Alert from './Alert'

import $ from 'jquery'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'

import imgs1 from "./images/tip.png";

const history = createHistory();

class Wuyemake extends Component {
	componentDidMount(){
		var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
		$("#wyname").val(wuye[0].name)
		$("#wyphone").val(wuye[0].phone)
		$("#wyemail").val(wuye[0].email)
		if(wuye[0].sex=="男"){
			$("#wyman").prop('checked',true)
		}else if(wuye[0].sex=="女"){
			$("#wywoman").prop('checked',true)
		}
	}
	wyxgxxhd(){
		var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
		this.props.wyxgxxd(wuye[0].id,$("#wyname").val(),$("#wyphone").val(),$(".modify :radio:checked").val(),$("#wyemail").val())
		$(".mask").show()
	}
  back=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	  <div>
    	  		<Alert data="修改成功" />
            <div className="modify_top">
                <span onClick={this.back}><img src={imgs1} alt=""/></span>
                <span>编辑资料</span>
            </div>
            <div className="modify">
                <input type="text" placeholder="昵称" id="wyname"/>
                <input  type="text" placeholder="手机号" id="wyphone"/>
                <input  type="text" placeholder="邮箱" id="wyemail"/>
                <input  type="radio" value="男" name="sex" id="wyman"/>男
                <input  type="radio" value="女" name="sex" id="wywoman"/>女
            </div>
            <div className="submit" onClick={this.wyxgxxhd.bind(this)}>提交</div>
        </div>
    );
  }
}

export default connect(e=>({data:e}),action)(Wuyemake);