import React, { Component } from 'react';
import Btn from './Btn'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './../css/srweima.css';
import * as action from './../action/action'
import {connect} from 'react-redux';
class YezhuAccept extends Component {
		componentDidMount(){
			$(".admin_con").hide()
		}
		componentWillUnmount(){
			$(".admin_con").show()
		}
    fn=function(){
        window.history.go(-1);
    }
    shengcheng=function(){
    	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
    	var con=$(".ermainput").val()+new Date().getTime()
    	this.props.fangkefn(con,yezhu[0].name)
    	$("#imgsboxs").html("<img className='erweimaimg' style='width: 290px;height: 290px;display: block;margin: 0 auto;' src=http://localhost:8100/create_qrcode?text="+con+"/>")
    	$(".ermainput").val('')
    }
    render() {
        return (
            <div>
                <div className="package_head">
                    <img className="back" src="../../images/arrow.png" onClick={this.fn} alt="" />
                    访客邀请
                </div>
                <div className="erweima">
                <p className="erweiname">姓名</p>
                <input type="text" className="ermainput"/>
                <p onClick={this.shengcheng.bind(this)}><Btn btnVal="确定"/></p>
                <div id="imgsboxs"></div>
                </div>
            </div>
        )
    }
}

export default connect(e=>({data:e.yezhuhuodong}),action)(YezhuAccept);