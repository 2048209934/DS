import React, { Component } from 'react';

class Wuyealready extends Component {
    tip=function(){
         window.history.go(-2)
    }
	render(){
		return (
			<div className="already">
				<div className="guarantee_bottom">
                    <ul className="repari">
                        <li>
                            <div className="repari_top">
                                <p>感应灯坏了，一直都不亮，请师傅尽快安排维修，要不然没办法走路。</p>
                            </div>
                            <div className="repari_bottom">
                                <div className="book">
                                    <p className="porto"></p>
                                    <div className="porto_con">
                                        <p>大圣</p>
                                        <p>大圣花园小区</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="tip" onClick={this.tip}>
                        <p><img src="../../images/tip.png" alt=""/></p>
                    </div>
                </div>
			</div>
			)
	}
}

export default Wuyealready