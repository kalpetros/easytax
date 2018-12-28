import styles from '../../../../css/src/Customers/View/Customer.css';
import {TopBar} from '../../Components/TopBar';
import {Button} from '../../Components/Button';
import {Card} from '../../Components/Card';

import axios from 'axios';
import moment from 'moment';
import update from 'immutability-helper';
import React from 'react';

function TaxisDetails(props) {
    let username = props.content.taxis_username;
    let password = props.content.taxis_password;
    
    return(
        <Card title="Στοιχεία TAXIS">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Όνομα Χρήστη
                </td>
                <td>
                  {username}
                </td>
              </tr>
              <tr>
                <td>
                  Κωδικός Πρόσβασης
                </td>
                <td>
                  {password}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function IkaDetails(props) {
    let username = props.content.ika_username;
    let password = props.content.ika_password;
    
    return(
        <Card title="Στοιχεία ΙΚΑ">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Όνομα Χρήστη
                </td>
                <td>
                  {username}
                </td>
              </tr>
              <tr>
                <td>
                  Κωδικός Πρόσβασης
                </td>
                <td>
                  {password}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function BusinessRegistryDetails(props) {
    let username = props.content.business_registry_username;
    let password = props.content.business_registry_password;
    
    return(
        <Card title="Στοιχεία ΓΕΜΗ">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Όνομα Χρήστη
                </td>
                <td>
                  {username}
                </td>
              </tr>
              <tr>
                <td>
                  Κωδικός Πρόσβασης
                </td>
                <td>
                  {password}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function PersonalDetails(props) {
    let taxNumber = props.content.tax_number;
    let socialSecurityNumber = props.content.social_security_number;
    let firstName = props.content.first_name;
    let lastName = props.content.last_name;
    let lastName2 = props.content.last_name_2;
    let fatherFirstName = props.content.father_first_name;
    let fatherLastName = props.content.father_last_name;
    let motherFirstName = props.content.mother_first_name;
    let motherLastName = props.content.mother_last_name;
    let dateOfBirth = moment(props.content.date_of_birth).format('D/MMM/Y');
    let dateOfDeath = props.content.date_of_death;
    let countryOfBirth = props.content.country_of_birth;
    let gender = props.content.gender;
    let nationality = props.content.nationality;
    
    return(
        <Card title="Προσωπικά Στοιχεία">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  ΑΦΜ
                </td>
                <td>
                  {taxNumber}
                </td>
              </tr>
              <tr>
                <td>
                  ΑΜΚΑ
                </td>
                <td>
                  {socialSecurityNumber}
                </td>
              </tr>
              <tr>
                <td>
                  Όνομα
                </td>
                <td>
                  {firstName}
                </td>
              </tr>
              <tr>
                <td>
                  Επώνυμο
                </td>
                <td>
                  {lastName}
                </td>
              </tr>
              <tr>
                <td>
                  Επώνυμο 2
                </td>
                <td>
                  {lastName2}
                </td>
              </tr>
              <tr>
                <td>
                  Όνομα Πατέρα
                </td>
                <td>
                  {fatherFirstName}
                </td>
              </tr>
              <tr>
                <td>
                  Επώνυμο Πατέρα
                </td>
                <td>
                  {fatherLastName}
                </td>
              </tr>
              <tr>
                <td>
                  Όνομα Μητέρας
                </td>
                <td>
                  {motherFirstName}
                </td>
              </tr>
              <tr>
                <td>
                  Πατρικό Επώνυμο Μητέρας
                </td>
                <td>
                  {motherLastName}
                </td>
              </tr>
              <tr>
                <td>
                  Ημερομηνία Γεννήσεως
                </td>
                <td>
                  {dateOfBirth}
                </td>
              </tr>
              <tr>
                <td>
                  Ημερομηνία Θανάτου
                </td>
                <td>
                  {dateOfDeath}
                </td>
              </tr>
              <tr>
                <td>
                  Χώρα Γεννήσεως
                </td>
                <td>
                  {countryOfBirth}
                </td>
              </tr>
              <tr>
                <td>
                  Φύλο
                </td>
                <td>
                  {gender}
                </td>
              </tr>
              <tr>
                <td>
                  Εθνικότητα
                </td>
                <td>
                  {nationality}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function ContactDetails(props) {
    let homePhoneNumber = props.content.home_phone_number;
    let mobilePhoneNumber = props.content.mobile_phone_number;
    let fax = props.content.fax;
    let email = props.content.email;
    
    return(
        <Card title="Στοιχεία Επικοινωνίας">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Σταθερό Τηλέφωνο
                </td>
                <td>
                  {homePhoneNumber}
                </td>
              </tr>
              <tr>
                <td>
                  Κινητό Τηλέφωνο
                </td>
                <td>
                  {mobilePhoneNumber}
                </td>
              </tr>
              <tr>
                <td>
                  FAX
                </td>
                <td>
                  {fax}
                </td>
              </tr>
              <tr>
                <td>
                  E-mail
                </td>
                <td>
                  {email}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function IdentityDetails(props) {
    let identityType = props.content.identity_type;
    let identityNumber = props.content.identity_number;
    let identityIssueDate = moment(props.content.identity_issue_date).format('D/MMM/Y');
    let identityIssuingAuthority = props.content.identity_issuing_authority;
    
    return(
        <Card title="Στοιχεία Ταυτότητας">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Τύπος Ταυτότητας
                </td>
                <td>
                  {identityType}
                </td>
              </tr>
              <tr>
                <td>
                  Αριθμος Ταυτότητας
                </td>
                <td>
                  {identityNumber}
                </td>
              </tr>
              <tr>
                <td>
                  Ημερομηνία Έκδοσης
                </td>
                <td>
                  {identityIssueDate}
                </td>
              </tr>
              <tr>
                <td>
                  Εκδούσα Αρχή
                </td>
                <td>
                  {identityIssuingAuthority}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function AddressDetails(props) {
    let country = props.content.country;
    let postcode = props.content.postcode;
    let address = props.content.address;
    let municipality = props.content.municipality;
    
    return(
        <Card title="Στοιχεία Διεύθυνσης">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Χώρα
                </td>
                <td>
                  {country}
                </td>
              </tr>
              <tr>
                <td>
                  Ταχυδρομικός Κώδικας
                </td>
                <td>
                  {postcode}
                </td>
              </tr>
              <tr>
                <td>
                  Διεύθυνση
                </td>
                <td>
                  {address}
                </td>
              </tr>
              <tr>
                <td>
                  Δήμος
                </td>
                <td>
                  {municipality}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

function StatusDetails(props) {
    let maritalStatus = props.content.marital_status;
    let marriageDate = props.content.marriage_date;
    let partnerTaxNumber = props.content.partner_tax_number;
    let partnerFirstName = props.content.partner_first_name;
    let partnerLastName = props.content.partner_last_name;

    if (marriageDate !== null) {
        marriageDate = moment(marriageDate).format('D/MMM/Y');
    }
    
    return(
        <Card title="Οικογενειακή Κατάσταση">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  Κατάσταση
                </td>
                <td>
                  {maritalStatus}
                </td>
              </tr>
              <tr>
                <td>
                  Ημερομηνία Γάμου
                </td>
                <td>
                  {marriageDate}
                </td>
              </tr>
              <tr>
                <td>
                  ΑΦΜ Συζύγου
                </td>
                <td>
                  {partnerTaxNumber}
                </td>
              </tr>
              <tr>
                <td>
                  Όνομα Συζύγου
                </td>
                <td>
                  {partnerFirstName}
                </td>
              </tr>
               <tr>
                <td>
                  Επώνυμο Συζύγου
                </td>
                <td>
                  {partnerLastName}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
    );
}

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {}
        };
    }
    componentDidMount() {
        this.fetch();
    }
    fetch() {
        let customer = this.props.customer;
        
        let data = {
            action: 'fetch_customer',
            customer_pk: customer
        };
        
        axios.post('/customers_view', data)
            .then((response) => {
                if (!response.data.errors) {
                    const newState = update(this.state, {
                        content: {$set: response.data.content}
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
    render() {
        let left = (
            <Button icon="arrow_back"
                    type={"round"}
                    onClick={this.props.onBackClick}/>
        );

        let right = (
            <Button icon="edit"
                    type={"round"}
                    onClick={this.handleAddClick}/>
        );
        
	return(
	    <div className={styles.customer}>
              <TopBar left={left}
                      right={right}/>
              <div className={styles.content}>
                <TaxisDetails content={this.state.content}/>
                <IkaDetails content={this.state.content}/>
                <BusinessRegistryDetails content={this.state.content}/>
                <PersonalDetails content={this.state.content}/>
                <ContactDetails content={this.state.content}/>
                <IdentityDetails content={this.state.content}/>
                <AddressDetails content={this.state.content}/>
                <StatusDetails content={this.state.content}/>
              </div>
	    </div>
	);
    }
}

export{Customer};
