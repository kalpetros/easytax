import '../../css/src/Globals.css';
import styles from '../../css/src/index.css';
import {Customers} from './Customers';
import {Navbar} from './Navbar';
import {Menu} from './Menu';

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
        const customers = (props) => (
            <Customers {...props}
                       onLogin={this.handleLogin}
                       user={this.state.user}/>
        );

        const navbar = (props) => (
            <Navbar {...props}/>
        );

        let list = [
            {name: 'Customers', id: 'cus', icon: 'supervised_user_circle'}
        ];

        const menu = (props) => (
            <Menu {...props}
                  list={list}/>
        );
        
        const root = (props) => (
            this.state.user !== null ? (
                customers(props)
            ) : (
                customers(props)
            )
        );

	return(
            <React.Fragment>
	      <Router>
	        <ScrollWrapper>
                  <Route render={navbar}/>
                  <div className={styles.index}>
                    <Route render={menu}/>
                    <Switch>
	              <Route exact path="/" render={root}/>
                      <Route exact path="/customers" render={root}/>
                      {/* <Route exact path="/customers/:customerId" render={}/> */}
                      <Route exact path="/profile" render={root}/>
	              <Route component={FourOFour}/>
	            </Switch>
                  </div>
	        </ScrollWrapper>
	      </Router>
            </React.Fragment>
	);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
