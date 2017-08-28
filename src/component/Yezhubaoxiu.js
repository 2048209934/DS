import React, { Component } from 'react';
import './../css/yezhubaoxiu.css';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';
class Yezhubaoxiu extends Component {

  componentDidMount(){
    $(".admin_con").hide()
    var bb=JSON.parse(window.sessionStorage.getItem("yezhu"))
    this.props.yezhu_antee(bb[0].address)
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  
  bxtj(){

    var bb=JSON.parse(window.sessionStorage.getItem("yezhu"))
    this.props.wuye_bx($("#con").val(),bb[0].address,bb[0].family)
  }
  render() {
    return (
    	  <div>
           <div className="deal_top">
              <div className='del_top'>
                  <p></p>
                  <p>报事报修</p>
                  <p></p>   
              </div>
              <div className="deal_con">
                  <textarea className="btn_area" placeholder="备注" id="con"></textarea>
                  <div className="btn_boxs" onClick={this.bxtj.bind(this)} id="btn">提交</div>
              </div>
           </div>
           <div></div>
        </div>
    );
  }
}

export default connect(e=>({data:e.wuyeantee}),action)(Yezhubaoxiu);