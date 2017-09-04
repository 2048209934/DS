import React, { Component } from 'react';
import  Yezhuamend from './Yezhu_amend';
import  Yezhuactivity from './Yezhu_activity';
import  Yezhuhouse from './Yezhu_house';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as action from './../action/action';
import {connect} from 'react-redux';

class Yezhume extends Component {
    componentDidMount(){
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        this.props.yezhu_showhouse(yezhusjjson[0].address,yezhusjjson[0].family);
    }
    chengfn=function(e){
    var ev=e||window.event
    var files
    var yezhusj=window.sessionStorage.getItem('yezhu');
    var yezhusjjson=JSON.parse(yezhusj);	
    //console.log(yezhusjjson[0].id)
    //this.props.touxiangfn(yezhusjjson[0].id)
    files=ev.target.files
    var fd=new FormData();  //表单处理数据的方法
		for(var i=0;i<files.length;i++){
		fd.append('file['+i+']',files[i]) //用append方法以键值对的方式保存
    }
		this.props.touxiangfn(fd,yezhusjjson[0].id)
		}
    render() {
        var yezhusj=window.sessionStorage.getItem('yezhu');
        var yezhusjjson=JSON.parse(yezhusj);
        console.log(yezhusjjson[0].imgs)
    return (
        <Router>
            <div>
                <Route exact path='/yezhu/index/me' render={() => (
                	<div className="myself">
                        <div className="myself_top">
                            <a href="#"  className="file"  id="zpd">
                                <p id="pps"><img src={this.props.data==""?yezhusjjson[0].imgs:this.props.data}/></p>
                                <input type="file" onChange={this.chengfn.bind(this)}  name="" id="file"/>
                            </a>
                            <div className="myself_word">
                                <p>游客</p>
                                <p>大圣城市花园</p>
                            </div>
                            <Link to="/yezhu/index/me/amend">
                                <div className="arrow">></div>
                            </Link>
                        </div>
                        <div className="myself_now">
                            <div className="now_left">
                                <p>身份</p>
                                <p>{yezhusjjson[0].owner==1?'户主':'家属'}</p>
                            </div> 
                            <div className="now_right">
                                <p>当前房屋人数</p>
                                <p>共{this.props.data.length}人</p>
                            </div> 
                        </div>
                        {/*list*/}
                        <ul className="list">
                            <li className="white">  </li>
                            <Link to="/yezhu/index/me/house">
                                <li className="clear">
                                    <span className="left">我的房屋</span>
                                    <span className="right">></span>
                                </li>
                            </Link>
                            <Link to="/yezhu/index/me/activity">
                                <li className="clear">
                                    <span className="left">我参与的活动</span>
                                    <span className="right">></span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                )} />
                <Route path="/yezhu/index/me/amend" component={Yezhuamend}/>
                <Route path="/yezhu/index/me/activity" component={Yezhuactivity}/>   
                <Route path="/yezhu/index/me/house" component={Yezhuhouse}/>  
            </div>
        </Router>
    )
  }
}


export default connect(e=>({data:e.yezhuyx}),action)(Yezhume);