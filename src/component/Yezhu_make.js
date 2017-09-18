import React, { Component } from 'react';
import $ from 'jquery';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import imgs1 from "./images/arrow.png";

class Yezhumake extends Component {
  componentDidMount(){
      var yezhusj=window.sessionStorage.getItem('yezhu');
      var yezhusjjson=JSON.parse(yezhusj);
      $('#yzname').val(yezhusjjson[0].name);
      $('#yzphone').val(yezhusjjson[0].phone);
      $('#yemail').val(yezhusjjson[0].email);
      if(yezhusjjson[0].sex=='男'){
          $("#yezhuman").prop('checked',true)
      }else if(yezhusjjson[0].sex=='女'){
          $("#yezhuwoman").prop('checked',true)
      }
  }
  back=function(){
    window.history.go(-1)
  }
  revise=function(){
    var yezhusj=window.sessionStorage.getItem('yezhu');
      var yezhusjjson=JSON.parse(yezhusj);
    this.props.yezhu_revisemsg(yezhusjjson[0].id,$('#yzname').val(),$('#yzphone').val(),$('#yemail').val(),$('.modify :radio:checked').val());
    $('.mask').show();
  }
  render() {
    return (
    	  <div>
            <Alert data='修改成功'/>
            {/*header*/}
            <p className="head" id="head">
                <img onClick={this.back} src={imgs1} alt="" />
                <span>编辑资料</span>
            </p>
            <div className="modify">
                <input type="text" placeholder="昵称" id="yzname"/>
                <input  type="text" placeholder="手机号" id="yzphone"/>
                <input  type="text" placeholder="邮箱" id="yemail"/>
                <input  type="radio" value="男" name="sex" id="yezhuman" />男
                <input  type="radio" value="女" name="sex" id="yezhuwoman"/>女
            </div>
            <div onClick={this.revise.bind(this)} className="submit">提交</div>

        </div>
    );
  }
}


export default connect(e=>({data:e}),action)(Yezhumake);