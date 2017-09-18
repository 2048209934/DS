import React, { Component } from 'react';
import './../css/yezhubaoxiu.css';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import imgs1 from "./images/arrow.png";
import * as action from './../action/action'
import {connect} from 'react-redux';
import Btn from './Btn';
class Yezhubaoxiu extends Component {
  componentDidMount(){
    $(".admin_con").hide()
        var dd=JSON.parse(window.sessionStorage.getItem("yezhu"))
        this.props.wuye_bxs(dd[0].address,dd[0].family)
    }
    componentWillUnmount(){
      $(".admin_con").show()
    }
    go=function(){
      window.history.go(-1)
    }
  
  bxtj(){
    if($(".orgin").val()!=""){
        var dd=JSON.parse(window.sessionStorage.getItem("yezhu"))
        this.props.wuye_bx($("#con").val(),dd[0].address,dd[0].family)
    $(".orgin").val(" ")
    document.getElementById("organize").style.height="0"
      $(".topsbtn").css("display","block")
    }else{
      $(".organize p").css("opacity","1")
    }
  }
  btnfn=function(){
    $(".topsbtn").css("display","none");
      document.getElementById("organize").style.height="7.5rem"

  }
  render() {
    return (
    	  <div>
            {/*header*/}
            <p className="head" id="head">
                <img onClick={this.go} src={imgs1} alt="" />
                <span>报修</span>
            </p>
             <div className="deal_top">
                <div className='del_top'>
                    <p></p>
                    <p>报事报修</p>
                    <p></p>   
                </div>
             </div>
              <div className="deal_con">
                  <div className="topsbtn" onClick={this.btnfn}><Btn btnVal="快捷报修" ></Btn></div>
                  <div className="organize" id="organize">
                      <textarea  className="orgin" id="con"></textarea>
                      <p>不能为空</p>
                      <div onClick={this.bxtj.bind(this)}><Btn btnVal="发布" ></Btn></div>
                  </div>
              </div>
           <ul className="orgin_con">
            {this.props.data.map(function(e,i){
               return   (
                 <li key={i} className="baoxiu_box">
                    <div className="one">
                        <span>{e.village}</span>
                        <span>{e.address}</span>
                    </div>
                    <p className="two">{e.con}</p>
                    <p className="time">{e.time.substr(0,19).split("T").join("   ")}</p>
                </li>
    )
})}
            </ul>
        </div>
    );
  }
}

export default connect(e=>({data:e.wuyebaoxiu}),action)(Yezhubaoxiu);