import styles from '../../../css/src/Clients/Create.css';
import {TopBar} from '../Components/TopBar';
import {Button} from '../Components/Button';
import {FormErrors} from '../Forms/FormErrors';

import {Content} from './Create/Content';

import axios from 'axios';
import update from 'immutability-helper';
import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                taxis_username: '',
                taxis_password: '',
                ika_username: '',
                ika_password: '',
                business_registry_username: '',
                business_registry_password: '',
                tax_number: '',
                social_security_number: '',
                first_name: '',
                last_name: '',
                last_name_2: '',
                father_first_name: '',
                father_last_name: '',
                mother_first_name: '',
                mother_last_name: '',
                date_of_birth: '',
                date_of_death: '',
                country_of_birth: '',
                gender: '',
                nationality: '',
                home_phone_number: '',
                mobile_phone_number: '',
                fax: '',
                email: '',
                identity_type: '',
                identity_number: '',
                identity_issue_date: '',
                identity_issuing_authority: '',
                country: '',
                postcode: '',
                address: '',
                municipality: '',
                marital_status: '',
                marriage_date: '',
                partner_tax_number: '',
                partner_first_name: '',
                partner_last_name: ''
            },
            formErrors: null
        };

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleAddClick() {
        let data = {
            action: 'create_client',
            form: this.state.form
        };
        
        axios.post('/clients_view', data)
            .then((response) => {
                if (!response.data.errors) {
                    //console.log(response);
                    
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
        const newState = update(this.state, {
            form: {[event.currentTarget.id]: {$set: event.currentTarget.value}}
        });

        this.setState(newState);
    }
    render() {
        let left = (
            <Button icon="arrow_back"
                    type={"round"}
                    onClick={this.props.onBackClick}/>
        );

        let right = (
            <Button icon="save"
                    type={"round"}
                    onClick={this.handleAddClick}/>
        );
        
	return(
	    <div className={styles.create}>
              <TopBar left={left}
                      right={right}/>
              <FormErrors errors={this.state.formErrors}/>
              <Content form={this.state.form}
                       onChange={this.handleChange}/>
	    </div>
	);
    }
}

export{Create};
