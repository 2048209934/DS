import React, { Component } from 'react';
import './../css/bossindex.css';

import Bosszhuzhe from './Bosszhuzhe';
import Bosssteward from './Bosssteward';
import Bossshequ from './Bossshequ';
import Bossme from './Bossme';
import  Bossdetail from './Boss_detail';

import $ from 'jquery';
import OldMenuLink from './Navs';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bossindex extends Component {
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
    	  	<Route path="/boss/index" exact component={Bosssteward} />
    	  	<Route path="/boss/index/shequ" component={Bossshequ} />
          <Route path="/boss/index/detail" component={Bossdetail}/>
	         <div className="boss_con">
                <OldMenuLink to={'/boss/index'} activeOnlyWhenExact={true} label={'管家'} img1={'../images/account_eight.png'} img2={'../images/account_server.png'}></OldMenuLink>
                <OldMenuLink to={'/boss/index/shequ'} label={'社区'} img1={'../images/account_four.png'} img2={'../images/account_three.png'}></OldMenuLink>
            </div>
    	  	{/*<Link to="/boss/index">住这儿</Link>
    	  	<Link to="/boss/index/steward">管家</Link>
    	  	<Link to="/boss/index/shequ">社区</Link>
    	  	<Link to="/boss/index/me">我</Link>
        */}
        </div>
    	 </Router>   
    );
  }
}


export default Bossindex;