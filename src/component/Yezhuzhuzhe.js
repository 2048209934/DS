import React, { Component } from 'react';
import  YezhuAccept from './Yezhu_accept';
import  YezhuPackage from './Yezhu_package';
import  YezhuShare from './Yezhu_share';
import { Carousel } from 'react-bootstrap';
import Yezhuaddress from './Yezhu_address';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action'
import {connect} from 'react-redux';
class Yezhuzhuzhe extends Component {
	componentDidMount(){
	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
	this.props.yezhutljs(yezhu[0].address,yezhu[0].id)
	}
    /*componentDidMount(){
        if(window.addEventListener){
            document.addEventListener('scroll', this.handleScroll);
        }else{
            document.attachEvent('onscroll', this.handleScroll);
        }
    }
    handleScroll=function (e) {
        var head=document.getElementById('head');
        if((document.body.scrollTop || document.documentElement.scrollTop)>=0){ 
            
        }
        else{
            
        }
    }*/
    render() {
        return (
            <Router>
        	    <div>
                    <Route exact path='/yezhu/index' render={() => (
                        <div className="wrap">
                            {/*header*/}
                            <p className="head" id="head">
                               <Link to="/yezhu/index/address"> 
                                    <img src="../images/xiaoxi.png" alt="" />
                               </Link>
                                <span>北京半岛馨苑</span>
                            </p>


                            {/*banner*/}
                	  	    <div className="banner">
                                <img src="../images/ggg.jpg" alt="" />
                            </div>

                            


                            {/*ewm and yb*/}
                            <div className="accept clear">
                                <Link to="/yezhu/index/accept">
                                    <div className="accept_left left">
                                        <div className="word left">
                                            <p>访客邀请</p>
                                            <p>扫码过门禁</p>
                                        </div>
                                        <div className="icon left">
                                            <img src="../images/ewm2.jpg" alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/yezhu/index/package">
                                    <div className="accept_left accept_right right">
                                        <div className="word left">
                                            <p>邮包</p>
                                            <p>收包更便捷</p>
                                        </div>
                                        <div className="icon left">
                                            <img src="../images/parcel.png" alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/*fresh things*/}
                            <p className="fresh">社区新鲜事</p>
                            {/*content*/}
                            
                              <ul className="contents margints">
                    {this.props.data.slice(0,3).map(function(e,i){
                    	return <Link key={i} to={`/yezhu/index/share/${e.id}`}>
                        <li id="li" className="box">
                            <p className="name clear">
                                <img className="left" src="./../../images/guanjia_03.jpg" alt="" />
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
                        </Link>
                    })}
                    </ul>
                            
                        </div>
                    )} />  
                    <Route path="/yezhu/index/accept" component={YezhuAccept}/>
                    <Route path="/yezhu/index/package" component={YezhuPackage}/>
                    <Route path="/yezhu/index/share/:id" component={YezhuShare}/>
                    <Route path="/yezhu/index/address" component={Yezhuaddress}/>
                </div>
            </Router>
        );
    }
}
export default connect(e=>({data:e.yezhuluntan}),action)(Yezhuzhuzhe);
