import styles from '../../css/src/Authentication.css';
import {Login} from './Authentication/Login';
import {Join} from './Authentication/Join';

import update from 'immutability-helper';
import axios from 'axios';
import React from 'react';

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'login',
            loginForm: {
                username: '',
                password: ''
            },
            joinForm: {
                username: '',
                email: '',
                password: '',
                password2: '',
                first_name: '',
                last_name: ''
            },
            formErrors: null
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleJoinChange = this.handleJoinChange.bind(this);
        this.handleViewChange = this.handleViewChange.bind(this);
    }
    componentDidMount() {
    }
    handleLogin() {
        let data = {
            action: 'login',
            form: this.state.loginForm
        };
        
        axios.post('/authentication', data)
            .then((response) => {
                if (!response.data.errors) {
                    window.location.reload();
                } else {
                    const newState = update(this.state, {
                        formErrors: {$set: response.data.message}
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
    handleJoin() {
        let data = {
            action: 'join',
            form: this.state.joinForm
        };
        
        axios.post('/authentication', data)
            .then((response) => {
                if (!response.data.errors) {
                    window.location.reload();
                } else {
                    const newState = update(this.state, {
                        formErrors: {$set: response.data.message}
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
    handleLoginChange(event) {
        let id = event.currentTarget.id;
        let value = event.currentTarget.value;
        
        const newState = update(this.state, {
            loginForm: {[id]: {$set: value}}
        });

        this.setState(newState);
    }
    handleJoinChange(event) {
        let id = event.currentTarget.id;
        let value = event.currentTarget.value;
        
        const newState = update(this.state, {
            joinForm: {[id]: {$set: value}}
        });

        this.setState(newState);
    }
    handleViewChange() {
        const newState = update(this.state, {
            view: {$apply: (v) => v == 'login' ? 'join' : 'login'},
            formErrors: {$set: null}
        });

        this.setState(newState);
    }
    renderView() {
        if (this.state.view == 'login') {
            return(
                <Login onClick={this.handleLogin}
                       onChange={this.handleLoginChange}
                       onViewChange={this.handleViewChange}
                       form={this.state.loginForm}
                       formErrors={this.state.formErrors}/>
            );
        } else if (this.state.view == 'join') {
            return(
                <Join onClick={this.handleJoin}
                      onChange={this.handleJoinChange}
                      onViewChange={this.handleViewChange}
                      form={this.state.joinForm}
                      formErrors={this.state.formErrors}/>
            );
        }

        return(
            <Login onClick={this.handleLogin}
                   onChange={this.handleLoginChange}
                   onViewChange={this.handleViewChange}
                   form={this.state.loginForm}/>
        );
    }
    render() {
	return(
	    <div className={styles.authentication}>
              <div className={styles.container}>
                <div className={styles.title}>
                  <span>easytax</span>
                </div>
                {this.renderView()}
              </div>
	    </div>
	);
    }
}

export{Authentication};
