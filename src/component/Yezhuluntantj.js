import React, { Component } from 'react';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import imgs1 from "./images/arrow.png";
import imgs3 from "./images/xztp.png";
import './../css/yezhuluntantj.css';
import * as action from './../action/action'
import {connect} from 'react-redux';
//id:this.props.match.params.id
class Yezhuluntantj extends Component {
		componentDidMount(){
			$(".admin_con").hide()
		}
		componentWillUnmount(){
			$(".admin_con").show()
		}
    fn=function(){
        window.history.go(-1);
        this.props.yezhultfbfns([])
    }
    filluefn=function(e){
    	var ev=e||window.event
    	var files=ev.target.files
    	console.log(files)
    	var fd=new FormData();  //表单处理数据的方法
				for(var i=0;i<files.length;i++){
				fd.append('file['+i+']',files[i]) //用append方法以键值对的方式保存
      }
				this.props.yezhultfbfn(fd)
				}
    luntantjfs=function(){
    	if($(".lttext").val()!=""){
  	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
  	//console.log(this.props.data.length>0?this.props.data.join("?"):"")
  	var img=this.props.data.length>0?this.props.data.join("?"):""
  	this.props.yezhultfbfns([])
  	this.props.yezhultfbsn(yezhu[0].name,$(".lttext").val(),yezhu[0].address,yezhu[0].id,img,yezhu[0].imgs)	
  	//console.log(yezhu[0].imgs)
 	}
    }
    render() {
        return (
            <div className="wapers">
            <div className="package_head">
                    <img className="back" src={imgs1} onClick={this.fn.bind(this)} alt="" />
                    邻里分享
                    <span className="luntantj" onClick={this.luntantjfs.bind(this)}>提交</span>
                </div>
                <div className="liboxs">
                <textarea  className="textareas" className="lttext"></textarea>
                <div>
    <a href="javascript:;" className="filep"  id="zpd">
	<p id="pps"><img className="back" src={imgs3} onClick={this.fn} alt="" /></p>
        <input type="file" multiple="multiple" name="" id="file" onChange={this.filluefn.bind(this)}/>
    </a></div>
    <div className="luntanimg">{this.props.data.map(function(e,i){
    	return <img key={i} src={e}  alt="" />
    })}</div>
                </div>
            </div>
        )
    }
}

export default connect(e=>({data:e.luntantupian}),action)(Yezhuluntantj);