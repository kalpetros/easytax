import '../../css/src/Globals.css';
import styles from '../../css/src/index.css';
import {Landing} from './Landing';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom';
import axios from 'axios';
import update from 'immutability-helper';
import React from 'react';
import ReactDOM from 'react-dom';

// Disable dragging
window.ondragstart = function() { return false; };

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
	if (this.props.location !== prevProps.location) {
	    window.scrollTo(0, 0);
	}
    }
    render() {
	return this.props.children;
    }
}

// Wrap ScrollToTop in withRouter to
// give it access to the router's props
const ScrollWrapper = withRouter(ScrollToTop);

class FourOFour extends React.Component {
    render() {
	return(
	    <div className="FourOFour">
	      <div className="container">
		<h3>You landed in a wrong page!</h3>
		<Link to="/">
		  <i className="material-icons large">arrow_back</i>
		</Link>
	      </div>
	    </div>
	);
    }
}

class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
            links: {
                one: {name: 'One', 'to': '/one'},
                two: {name: 'Two', 'to': '/two'},
                three: {name: 'Three', 'to': '/three'}
            }
	};
    }
    render() {
        const landing = (props) => (
            <Landing {...props}
                     onLogin={this.handleLogin}
                     user={this.state.user}/>
        );
        const root = (props) => (
            this.state.user !== null ? (
                landing(props)
            ) : (
                landing(props)
            )
        );

	return(
            <React.Fragment>
	      <Router>
	        <ScrollWrapper>
	          <Switch>
	            <Route exact path="/" render={root}/>
	            <Route component={FourOFour}/>
	          </Switch>
	        </ScrollWrapper>
	      </Router>
            </React.Fragment>
	);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));