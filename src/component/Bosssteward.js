import React, { Component } from 'react';
import  Bossdetail from './Boss_detail';
import  Alert from './Alert';
import $ from 'jquery';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory'
const history = createHistory();

class Bosssteward extends Component {
	componentDidMount(){
		this.props.bosszsxqd()
  	setTimeout(()=>{
			var bosssj=window.sessionStorage.getItem('boss')
			var bosssjjson=JSON.parse(bosssj)
			if(bosssjjson==0){
				$(".bj").parent().parent().html(`
					<div>
						<div style="height:50px; line-height:50px; text-align:center; position:relative; border-bottom:1px solid #ccc; font-size:16px;">
							<img id="hwuyedl" src="../images/arrow.png" alt="" style="width:20px; height:22px; position:absolute; top:30%; left:15px;">登录
						</div>
						<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>
					<div>
					`)
				$("#hwuyedl").click(function(){
					window.history.go(-1)
				})
			}
		},10)
  }
	qdda(e){
		var xqd=document.getElementById("xqd")
		if(xqd.value==0){
//			console.log(xqd.value)
			$(".mask").show()
			e.preventDefault()
		}else{
			window.sessionStorage.setItem('xq',xqd.value)
		}
	}
  render() {
    return (
        <Router history={history}>
        	<div>
                <Route exact path='/boss/index' render={() => (
                    <div className="bj">
                    		<Alert data="请选择小区" />
                        {/*header*/}
                        <p className="heads" id="head">
                            管家
                        </p>
                        <p className="all_xq">所有小区：</p>
                        <select className="more_xq" id="xqd">
                            <option value="0">选择小区</option>
                            {
                            	this.props.data.map(function(v,i){
                            		return <option key={i} value={v.name}>{v.name}</option>
                            	})
                            }
                        </select>
                        <Link to="/boss/index/detail" onClick={this.qdda}>
                            <button className="xq_btn">确定</button>
                        </Link>
                    </div>
                )} /> 
                <Route path="/boss/index/detail" component={Bossdetail}/>
            </div>
        </Router>
    );
  }
}

export default connect(e=>({data:e.bosszsxqdata}),action)(Bosssteward);
