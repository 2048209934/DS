import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bosssteward extends Component {
  render() {
    return (
        <Router>
        	<div>
        	  	{/*header*/}
                    <p className="head" id="head">
                        管家
                    </p>
            </div>
        </Router>
    );
  }
}

export default Bosssteward;