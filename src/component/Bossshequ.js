import React, { Component } from 'react';
import './../css/boss_shequ.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bossshequ extends Component {
  render() {
    return (
    	<Router>
            <div>
                {/*header*/}
                <p className="head" id="head">
                    社区
                </p>
            </div>
        </Router>

    );
  }
}

export default Bossshequ;