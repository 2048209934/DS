import React, { Component } from 'react';
import  YezhuShare from './Yezhu_share';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';

class Yezhushequ extends Component {
		componentDidMount(){
	var yezhu=JSON.parse(window.sessionStorage.getItem('yezhu'))
	this.props.yezhutljs(yezhu[0].address,yezhu[0].id)
	}
    /*componentDidMount(){
        var ul=document.getElementsByTagName('ul');
        var li=document.getElementById('li');
        var newLi=li.cloneNode(true);
        function number(x){
            var ul=document.getElementsByTagName('ul');
            var li=document.getElementById('li');
            var newLi=li.cloneNode(true);
            for(var k=0; k<x; k++){
                ul.appendChild(newLi);
            }
        }
        number(8);
        window.onscroll=function(){
            var Screen = document.documentElement.clientHeight;
            var sTop =document.body.scrollTop||document.documentElement.scrollTop;
            var sHeight = document.body.scrollHeight;
            if(sTop+Screen>=sHeight-50) {
                number(5);
            }
        }
    }*/
  render() {
    return (
        <Router>
    	    <div>
    	  	    <div className="wrap">
                   {/*header*/}
                    <Route exact path='/yezhu/index/shequ' render={() => (
                    	<div>
                   <p className="head" id="head">
                        <span>社区</span>
                    </p>
                    {/*content*/}
                    <ul className="contents">
                    {this.props.data.map(function(e,i){
                    	return <Link key={i} to={`/yezhu/index/shequ/share/${e.id}`}>
                        <li id="li" className="box">
                            <p className="name clear">
                                <img className="left" src="./../../images/guanjia_03.jpg" alt="" />
                                <span className="left">{e.name}</span>
                                <span className="left">在</span>
                                <span className="left">邻里分享</span>
                            </p>
                            <p>{e.con}</p>
                          
                            <img className="prompt" src="../../../images/prompt_03.jpg" alt="" />
                            <div className="time">{e.time.substr(0,19).split("T").join("   ")}</div>
                        </li>
                        </Link>
                    })}
                    </ul>
                    </div>
                    )} /> 
                </div>
                <Route path="/yezhu/index/shequ/share/:id" component={YezhuShare}/>
            </div>
        </Router>
    )
  }
}

export default connect(e=>({data:e.yezhuluntan}),action)(Yezhushequ);