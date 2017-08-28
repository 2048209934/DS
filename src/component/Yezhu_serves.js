import React, { Component } from 'react';

import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Yezhuserves extends Component {
	componentDidMount(){
		$(".admin_con").hide()
	}
	componentWillUnmount(){
		$(".admin_con").show()
	}
  go=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	<div>
            {/*header*/}
            <p className="head" id="head">
                <img onClick={this.go} src="../../../images/arrow.png" alt="" />
                <span>他们为你服务</span>
            </p>
            <div className="kong"></div>
            <div className="serves clear">
                <div className="serves_left left">
                    <img src="../../../images/bai.png" alt="" />
                </div>
                <div className="serves_right left">
                    <p>白桐</p>
                    <p>网格管家</p>
                    <div className="zan clear">
                        <p className="left zan_first clear">
                            <img className="left" src="../../../images/nozan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <p className="left zan_second clear">
                            <img className="left" src="../../../images/zan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <img className="right" src="../../../images/hb.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="serves clear">
                <div className="serves_left left">
                    <img src="../../../images/peoplen.png" alt="" />
                </div>
                <div className="serves_right left">
                    <p>白桐</p>
                    <p>网格管家</p>
                    <div className="zan clear">
                        <p className="left zan_first clear">
                            <img className="left" src="../../../images/nozan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <p className="left zan_second clear">
                            <img className="left" src="../../../images/zan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <img className="right" src="../../../images/hb.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="serves clear">
                <div className="serves_left left">
                    <img src="../../../images/peoplen.png" alt="" />
                </div>
                <div className="serves_right left">
                    <p>白桐</p>
                    <p>网格管家</p>
                    <div className="zan clear">
                        <p className="left zan_first clear">
                            <img className="left" src="../../../images/nozan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <p className="left zan_second clear">
                            <img className="left" src="../../../images/zan.png" alt="" />
                            <span className="left">0</span>
                        </p>
                        <img className="right" src="../../../images/hb.png" alt="" />
                    </div>
                </div>
            </div>
        </div>  	
    )
  }
}

export default Yezhuserves;