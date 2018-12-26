import styles from '../../../css/src/Authentication/Login.css';
import {FormErrors} from '../Forms/FormErrors';
import {Input} from '../Forms/Input';
import {Button} from '../Components/Button';
import {Panel} from '../Components/Panel';

import {Link} from 'react-router-dom';
import axios from 'axios';
import update from 'immutability-helper';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: ''
            },
            formErrors: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
    }
    handleClick() {
        let data = {
            action: 'login',
            form: this.state.form
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
    handleChange(event) {
        let id = event.currentTarget.id;
        let value = event.currentTarget.value;
        
        const newState = update(this.state, {
            form: {[id]: {$set: value}}
        });

        this.setState(newState);
    }
    render() {
	return(
            <div className={styles.login}>
              <div className={styles.container}>
                <div className={styles.title}>
                  <span>easytax</span>
                </div>
                <Panel>
                  <div className={styles.form}>
                    <FormErrors errors={this.state.formErrors}/>
                    <div>
                      <Input id="username"
                             name="username"
                             type="text"
                             label="Όνομα Χρήστη"
                             value={this.state.form.username}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Input id="password"
                             name="password"
                             type="password"
                             label="Κωδικός πρόσβασης"
                             value={this.state.form.password}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Button name="Σύνδεση"
                              onClick={this.handleClick}/>
                    </div>
                    <div>
                      <Link to="password-reset">Forgot your password?</Link>
                    </div>
                    <div>
                      <Link to="join">
                        Don't have an account? Join
                      </Link>
                    </div>
                  </div>
                </Panel>
              </div>
            </div>
	);
    }
}

export{Login};
