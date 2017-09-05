import React, { Component } from 'react';
import  WuyeParcel from './Wuye_parcel';
import  WuyeGuarantee from './Wuye_guarantee';
import  WuyeNotice from './Wuye_notice';
import  WuyeOrganize from './Wuye_organize';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';

class Wuyezhuzhe extends Component {
	componentDidMount(){
			setTimeout(function(){
				var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
				if(wuye!=0){
					this.props.yezhutljs(wuye[0].village,wuye[0].id)
				}		
			}.bind(this),100)
	}
  render() {
  	var wuye=JSON.parse(window.sessionStorage.getItem('wuye'))
    return (
      <Router>
    	  <div className="property">
              <div className="property_con">
                  <Route exact path='/wuye/index' render={() => (
                      <div>
                          <div className="banner">
                                 <img src="../images/banner_one.jpg" alt=""/>
                              <div className="banner_box">
                                  <span className="banner_word">{wuye==null?'':wuye[0].village}</span>
                                  <span className="banner_news"><img src="../images/xiaoxi.png" alt=""/></span>
                              </div>
                          </div>
                          <div className="property_manage">
                              <Link to="/wuye/index/organize" className="life">
                                    <div className="organize_left">
                                        <p className="one">组织活动</p>
                                        <p className="two">一起寻快乐</p>
                                    </div>
                                    <div className="organize_right"><img src="../images/life.png" alt=""/></div>
                              </Link>
                              <Link to="/wuye/index/notice" className="phone">
                                    <div className="organize_left">
                                        <p className="one">通知</p>
                                        <p className="two">接收更方便</p>
                                    </div>
                                    <div className="organize_right"><img src="../images/phone.png" alt=""/></div>
                              </Link>
                              <Link to="/wuye/index/parcel" className="parcel">  
                                  <div className="organize_left">
                                        <p className="one">邮包</p>
                                        <p className="two">收发更快捷</p>
                                  </div>
                                  <div className="organize_right"><img src="../images/parcel.png" alt=""/></div>
                              </Link>                                                       
                              <Link to="/wuye/index/guarantee" className="manage">
                                  <div className="organize_left">
                                        <p className="one">报修</p>
                                        <p className="two">修复更快速</p>
                                  </div>
                                  <div className="organize_right"><img src="../images/manage.png" alt=""/></div>
                              </Link>
                          </div>
                          <p className="fresh">社区新鲜事</p>
                          {/*content*/}
                          <ul className="contents margints">
                    {this.props.data.slice(0,3).map(function(e,i){
                    	return <li key={i} id="li" className="box">
                            <p className="name clear">
                                <img className="left" src={e.toux} style={{'border-radius':'50%',height:'1.2rem'}} alt="" />
                                <span className="left">{e.name}</span>
                                <span className="left">在</span>
                                <span className="left">邻里分享</span>
                            </p>
                            <p className="luntancon">{e.con}</p>
                          
                         {e.img==null?"":e.img==""?"":e.img.split("?").map(function(v,s){
                            	return <img key={s} className=" luntanimgss" src={v} alt="" />
                            })}
                            <div className="luntansj">{e.time.substr(0,19).split("T").join("   ")}</div>
                        </li>
                    })}
                    </ul>
                        </div>
                     )} />  
                  <Route path="/wuye/index/parcel" component={WuyeParcel}/>
                  <Route path="/wuye/index/notice" component={WuyeNotice}/>
                  <Route path="/wuye/index/organize" component={WuyeOrganize}/>
                  <Route path="/wuye/index/guarantee" component={WuyeGuarantee}/>
              </div>
        </div>
        </Router>
    );
  }
}

export default connect(e=>({data:e.yezhuluntan}),action)(Wuyezhuzhe);