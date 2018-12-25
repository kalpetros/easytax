import '../../css/src/Globals.css';
import styles from '../../css/src/index.css';
import {PasswordChange} from './Authentication/PasswordChange';
import {Authentication} from './Authentication';
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

axios.defaults.xsrfHeaderName = "X-CSRFToken";

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
	};
        
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        this.fetchUser();
    }
    fetchUser() {
        let data = {
            action: 'get_user'
        };
        
        axios.post('/user_info', data)
            .then((response) => {
                if (!response.data.errors) {
                    // const links = this.state.links;
                    // links['user'] = {
                    //     name: response.data.user.first_name,
                    //     to: '/profile',
                    //     image: 'https://mbtskoudsalg.com/images/avatar-png-1.png'
                    // };

                    const newState = update(this.state, {
                        user: {$set: response.data.user},
                        // links: {$set: links}
                    });

                    this.setState(newState);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
            });
    }
    handleLogout() {
        let data = {
            action: 'logout'
        };
        
        axios.post('/authentication', data)
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
            });
    }
    render() {
        const customers = (props) => (
            <Customers {...props}
                       onLogin={this.handleLogin}
                       user={this.state.user}/>
        );

        const navbar = (props) => (
            <Navbar {...props}
                    onLogout={this.handleLogout}/>
        );

        const passwordChange = (props) => (
            <PasswordChange {...props}/>
        );

        let list = [
            {name: 'Customers', id: 'cus', icon: 'supervised_user_circle'}
        ];

        const menu = (props) => (
            <Menu {...props}
                  list={list}/>
        );

        const authentication = (props) => (
            <Authentication {...props}
                            onLogin={this.handleLogin}
                            user={this.state.user}/>
        );
        
        if (this.state.user == null) {
            return(
                <React.Fragment>
	          <Router>
	            <ScrollWrapper>
                      <Switch>
	                <Route exact path="/" render={authentication}/>
                        <Route exact path="/password-change" render={passwordChange}/>
	                <Route component={FourOFour}/>
	              </Switch>
	            </ScrollWrapper>
	          </Router>
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
	          <Router>
	            <ScrollWrapper>
                      <Route render={navbar}/>
                      <div className={styles.index}>
                        <Route render={menu}/>
                        <Switch>
	                  <Route exact path="/" render={customers}/>
                          <Route exact path="/customers" render={customers}/>
                          {/* <Route exact path="/customers/:customerId" render={}/> */}
                          <Route exact path="/profile" render={customers}/>
	                  <Route component={FourOFour}/>
	                </Switch>
                      </div>
	            </ScrollWrapper>
	          </Router>
                </React.Fragment>
            );
        }
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
