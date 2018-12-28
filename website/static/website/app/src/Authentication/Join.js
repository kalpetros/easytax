import styles from '../../../css/src/Authentication/Join.css';
import {FormErrors} from '../Forms/FormErrors';
import {Input} from '../Forms/Input';
import {Button} from '../Components/Button';
import {Panel} from '../Components/Panel';

import {Link} from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import React from 'react';

class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                email: '',
                password: '',
                password2: '',
                first_name: '',
                last_name: ''
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
            action: 'join',
            form: this.state.form
        };
        
        axios.post('/authentication', data)
            .then((response) => {
                if (!response.data.errors) {
                    const newState = update(this.state, {
                        formErrors: {$set: response.data.message}
                    });

                    this.setState(newState);
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
            <div className={styles.join}>
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
                             label="Username"
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
                      <Input id="password2"
                             name="password2"
                             type="password"
                             label="Επιβεβαίωση κωδικού"
                             value={this.state.form.password2}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Input id="email"
                             name="email"
                             type="email"
                             label="E-mail"
                             value={this.state.form.email}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Input id="first_name"
                             name="first_name"
                             type="text"
                             label="Όνομα"
                             value={this.state.form.first_name}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Input id="last_name"
                             name="last_name"
                             type="text"
                             label="Επώνυμο"
                             value={this.state.form.last_name}
                             onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Button name="Δημιουργία λογαριασμού"
                              onClick={this.handleClick}/>
                    </div>
                    <div>
                      <Link to="/">
                        Already have an account? Log in
                      </Link>
                    </div>
                  </div>
                </Panel>
                <div className={styles.footer}>
                  <span>easytax v0.0.1</span>
                </div>
              </div>
            </div>
	);
    }
}

export{Join};
