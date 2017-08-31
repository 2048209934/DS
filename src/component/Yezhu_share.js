import React, { Component } from 'react';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';
//id:this.props.match.params.id
class YezhuShare extends Component {
		componentDidMount(){
			$(".admin_con").hide()
			var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
			this.props.yezhutlxq(this.props.match.params.id,yezhu[0].id)
			this.props.yezhuplzs(this.props.match.params.id)
		}
		componentWillUnmount(){
			$(".admin_con").show()
		}
    fn=function(){
        window.history.go(-1);
    }
    zanfn=function(){
    	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
    	//console.log(yezhu[0].id)
    	this.props.yezhutlzan(this.props.match.params.id,yezhu[0].id)
    }
    huifufn=function(name){
    	$("#plbtnss").focus()
    	this.props.pinglunhffn(name)
    }
    pinglunsrfn=function(){
    	console.log($("#plbtnss").focus())
    	this.props.pinglunsrfn("")
    }
    pingluntjs=function(){
    	if($("#plbtnss").val()!=""){
    var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
    this.props.yezhupinglunfns(this.props.match.params.id,$("#plbtnss").val(),yezhu[0].name,this.props.huifu)
    this.props.pinglunsrfn("")
    $("#plbtnss").val("")		
    	}
    }
    render() {
        return (
            <div className="wapers">
                <div className="package_head">
                    <img className="back" src="../../../../images/arrow.png" onClick={this.fn} alt="" />
                    <img className="more" src="../../../../images/circle.png" alt="" />
                    邻里分享
                </div>
                <div className="live">
                    <div className="lives">
                        <p className="pl_detail">
                            <img className="left" src="../../../../images/guanjia_03.jpg" alt="" />
                            <span className="left">{this.props.data.length==1?this.props.data[0].name:""}</span>
                        </p>
                        <p className="pl_content">
                          {this.props.data.length==1?this.props.data[0].con:""}
                        </p>
                        {this.props.data.length!=1?"":this.props.data[0].img==""?"":this.props.data[0].img==null?"":this.props.data[0].img.split("?").map(function(e,i){
                        	return <img key={i} className="prompt" src={e} alt="" />
                        })}
                        <div className="luntansj">{this.props.data.length==1?this.props.data[0].time.substr(0,19).split("T").join("   "):""}</div>
                    </div>
                </div>
                <div className="dianzan">
                    <span className="left">已有{this.props.data.length==1?this.props.data[0].help==""?0:this.props.data[0].help==null?0:this.props.data[0].help.split("?").length:"0"}人点赞</span>
                    <button className="right" onClick={this.zanfn.bind(this)}><img src={this.props.data.length==1?this.props.data[0].obes=="false"?"../../../../images/like.png":"../../../../images/like_fill.png":"../../../../images/like.png"} alt="" /></button>
                </div>
                <div className="pingluns">
                {this.props.pros.map(function(e,i){
                return <div key={i}><p><span onClick={this.huifufn.bind(this,e.name)}>{e.name}</span>{e.names==""?"":"回复"+e.names}:  <span>{e.title}</span></p>
                <p>{e.time.substr(0,19).split("T").join("   ")}</p>
                    </div>	
                }.bind(this))}
                </div>
                <div className="publish">
                    <input type="text"  placeholder={this.props.huifu==""?"评论":"回复"+this.props.huifu} id="plbtnss"/>
                    <button onClick={this.pingluntjs.bind(this)}>发表</button>
                </div>
            </div>
        )
    }
}

export default connect(e=>({data:e.yezhuluntanxq,pros:e.yezhuluntanpl,huifu:e.pinglunhuifu}),action)(YezhuShare);