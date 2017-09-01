import React, { Component } from 'react';
import  Bossdetail from './Boss_detail';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bosssteward extends Component {
	componentDidMount(){
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
  render() {
    return (
        <Router>
        	<div>
                <Route exact path='/boss/index' render={() => (
                    <div className="bj">
                        {/*header*/}
                        <p className="heads" id="head">
                            管家
                        </p>
                        <p className="all_xq">所有小区：</p>
                        <select className="more_xq">
                            <option>选择小区</option>
                            <option>金都景苑小区</option>
                            <option>幸福E家</option>
                            <option>纳帕溪谷</option>
                            <option>天伦锦城</option>
                            <option>雅居园小区</option>
                            <option>阳光佳园</option>
                        </select>
                        <Link to="/boss/index/detail">
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

export default Bosssteward;