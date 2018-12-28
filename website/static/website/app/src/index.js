import '../../css/src/Globals.css';
import styles from '../../css/src/index.css';
import {Login} from './Authentication/Login';
import {Join} from './Authentication/Join';
import {PasswordReset} from './Authentication/PasswordReset';
import {Settings} from './Settings';
import {Profile} from './Profile';
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
            user: null,
            loaded: false,
            view: 'cus'
	};
        
        this.handleLogout = this.handleLogout.bind(this);
        this.handleViewClick = this.handleViewClick.bind(this);
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
                    const newState = update(this.state, {
                        user: {$set: response.data.user},
                        loaded: {$set: true}
                    });

                    this.setState(newState);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                const newState = update(this.state, {
                    loaded: {$set: true}
                });

                this.setState(newState);
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
    handleViewClick(event) {
        const newState = update(this.state, {
            view: {$set: event.currentTarget.id}
        });

        this.setState(newState);
    }
    render() {
        const navbar = (props) => (
            <Navbar {...props}
                    user={this.state.user}
                    onLogout={this.handleLogout}/>
        );

        const login = (props) => (
            <Login {...props}
                   onLogin={this.handleLogin}
                   user={this.state.user}/>
        );

        const join = (props) => (
            <Join {...props}
                  onLogin={this.handleLogin}
                  user={this.state.user}/>
        );

        const passwordReset = (props) => (
            <PasswordReset {...props}/>
        );

        let list = [
            {name: 'Πελάτες', id: 'cus', icon: 'supervised_user_circle'}
        ];

        const customers = (props) => (
            <div className={styles.index}>
              <Menu {...props}
                    list={list}
                    active={this.state.view}
                    onClick={this.handleViewClick}/>
              <Customers {...props}
                         onLogin={this.handleLogin}
                         user={this.state.user}/>
            </div>
            
        );

        const settings = (props) => (
            <Settings {...props}
                      onLogin={this.handleLogin}
                      user={this.state.user}/>
        );

        const profile = (props) => (
            <Profile {...props}
                     onLogin={this.handleLogin}
                     user={this.state.user}/>
        );

        if (this.state.loaded) {
            if (this.state.user == null) {
                return(
                    <React.Fragment>
	              <Router>
	                <ScrollWrapper>
                          <Switch>
	                    <Route exact path="/" render={login}/>
                            <Route exact path="/join" render={join}/>
                            <Route exact path="/password-reset" render={passwordReset}/>
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
                          <Switch>
	                    <Route exact path="/customers" render={customers}/>
                            <Route exact path="/settings" render={settings}/>
                            <Route exact path="/profile" render={profile}/>
	                    <Route component={FourOFour}/>
	                  </Switch>
	                </ScrollWrapper>
	              </Router>
                    </React.Fragment>
                );
            }
        } else {
            return(
                <div className={styles.loading}></div>
            );
        }
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
