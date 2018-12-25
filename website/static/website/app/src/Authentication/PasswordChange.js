import styles from '../../../css/src/Authentication.css';
import pwdChange from '../../../css/src/Authentication/PasswordChange.css';
import {FormErrors} from '../Forms/FormErrors';
import {Input} from '../Forms/Input';
import {Button} from '../Components/Button';
import {Panel} from '../Components/Panel';

import {Link} from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import React from 'react';

class PasswordChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'login',
            form: {
                email: ''
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
            action: 'password_reset_request',
            form: this.state.form
        };
        
        axios.post('/authentication', data)
            .then((response) => {
                if (!response.data.errors) {
                    console.log(response);
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
	    <div className={styles.authentication}>
              <div className={styles.container}>
                <div className={styles.title}>
                  <span>easytax</span>
                </div>
                <Panel>
                  <div className={pwdChange.passwordChange}>
                    <FormErrors errors={this.state.formErrors}/>
                    <div>
                      <Input id="email"
                             name="email"
                             type="text"
                             label="E-mail"
                             value={this.state.form.email}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Button name="Request password change"
                              onClick={this.handleClick}/>
                    </div>
                    <div>
                      <Link to="/">Back to Login</Link>
                    </div>
                  </div>
                </Panel>
              </div>
	    </div>
	);
    }
}

export{PasswordChange};
