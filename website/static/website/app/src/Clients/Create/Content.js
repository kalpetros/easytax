import styles from '../../../../css/src/Clients/Create/Content.css';
import {Input} from '../../Forms/Input';

import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.content}>
              <span>Στοιχεία TAXIS</span>
              <div className={styles.input}>
                <Input id="taxis_username"
                       name="taxis_username"
                       type="text"
                       label="Όνομα Χρήστη"
                       value={this.props.form.taxis_username}
                       onChange={this.props.onChange}/>
                <Input id="taxis_password"
                       name="taxis_password"
                       type="password"
                       label="Κωδικός Πρόσβασης"
                       value={this.props.form.taxis_password}
                       onChange={this.props.onChange}/>
              </div>
              <span>Στοιχεία ΙΚΑ</span>
              <div className={styles.input}>
                <Input id="ika_username"
                       name="ika_username"
                       type="text"
                       label="Όνομα Χρήστη"
                       value={this.props.form.ika_username}
                       onChange={this.props.onChange}/>
                <Input id="ika_password"
                       name="ika_password"
                       type="password"
                       label="Κωδικός Πρόσβασης"
                       value={this.props.form.ika_password}
                       onChange={this.props.onChange}/>
              </div>
              <span>Στοιχεία ΓΕΜΗ</span>
              <div className={styles.input}>
                <Input id="business_registry_username"
                       name="business_registry_username"
                       type="text"
                       label="Όνομα Χρήστη"
                       value={this.props.form.business_registry_username}
                       onChange={this.props.onChange}/>
                <Input id="business_registry_password"
                       name="business_registry_password"
                       type="password"
                       label="Κωδικός Πρόσβασης"
                       value={this.props.form.business_registry_password}
                       onChange={this.props.onChange}/>
              </div>
              <span>Προσωπικά στοιχεία</span>
              <div className={styles.input}>
                <Input id="tax_number"
                       name="tax_number"
                       type="text"
                       label="ΑΦΜ"
                       value={this.props.form.tax_number}
                       onChange={this.props.onChange}/>
                <Input id="social_security_number"
                       name="social_security_number"
                       type="text"
                       label="ΑΜΚΑ"
                       value={this.props.form.social_security_number}
                       onChange={this.props.onChange}/>
              </div>
              <div className={styles.input}>
                <Input id="first_name"
                       name="first_name"
                       type="text"
                       label="Όνομα"
                       value={this.props.form.first_name}
                       onChange={this.props.onChange}/>
                <Input id="last_name"
                       name="last_name"
                       type="text"
                       label="Επώνυμο"
                       value={this.props.form.last_name}
                       onChange={this.props.onChange}/>
                <Input id="last_name_2"
                       name="last_name_2"
                       type="text"
                       label="Επώνυμο 2"
                       value={this.props.form.last_name_2}
                       onChange={this.props.onChange}/>
              </div>
            <div className={styles.input}>
                <Input id="father_first_name"
                       name="father_first_name"
                       type="text"
                       label="Όνομα Πατέρα"
                       value={this.props.form.father_first_name}
                       onChange={this.props.onChange}/>
                <Input id="father_last_name"
                       name="father_last_name"
                       type="text"
                       label="Επώνυμο Πατέρα"
                       value={this.props.form.father_last_name}
                       onChange={this.props.onChange}/>
              </div>
              <div className={styles.input}>
                <Input id="mother_first_name"
                       name="mother_first_name"
                       type="text"
                       label="Όνομα Μητέρας"
                       value={this.props.form.mother_first_name}
                       onChange={this.props.onChange}/>
                <Input id="mother_last_name"
                       name="mother_last_name"
                       type="text"
                       label="Πατρικό Επώνυμο Μητέρας"
                       value={this.props.form.mother_last_name}
                       onChange={this.props.onChange}/>
              </div>
            <div className={styles.input}>
                <Input id="date_of_birth"
                       name="date_of_birth"
                       type="text"
                       label="Ημερομηνία Γέννησης"
                       value={this.props.form.date_of_birth}
                       onChange={this.props.onChange}/>
                <Input id="date_of_death"
                       name="date_of_death"
                       type="text"
                       label="Ημερομηνία Θανάτου"
                       value={this.props.form.date_of_death}
                       onChange={this.props.onChange}/>
              </div>
              <div className={styles.input}>
                <Input id="country_of_birth"
                       name="country_of_birth"
                       type="text"
                       label="Χώρα Γέννησης"
                       value={this.props.form.country_of_birth}
                       onChange={this.props.onChange}/>
                <Input id="gender"
                       name="gender"
                       type="text"
                       label="Φύλο"
                       value={this.props.form.gender}
                       onChange={this.props.onChange}/>
              </div>
            <div className={styles.input}>
                <Input id="nationality"
                       name="nationality"
                       type="text"
                       label="Υπηκοότητα"
                       value={this.props.form.nationality}
                       onChange={this.props.onChange}/>
              </div>
              <span>Στοιχεία Επικοινωνίας</span>
            <div className={styles.input}>
                <Input id="home_phone_number"
                       name="home_phone_number"
                       type="text"
                       label="Σταθερό Τηλέφωνο"
                       value={this.props.form.home_phone_number}
                       onChange={this.props.onChange}/>
                <Input id="mobile_phone_number"
                       name="mobile_phone_number"
                       type="text"
                       label="Κινητό Τηλέφωνο"
                       value={this.props.form.mobile_phone_number}
                       onChange={this.props.onChange}/>
                <Input id="fax"
                       name="fax"
                       type="text"
                       label="Fax"
                       value={this.props.form.fax}
                       onChange={this.props.onChange}/>
                <Input id="email"
                       name="email"
                       type="text"
                       label="E-mail"
                       value={this.props.form.email}
                       onChange={this.props.onChange}/>
              </div>
              <span>Στοιχεία Ταυτότητας</span>
            <div className={styles.input}>
                <Input id="identity_type"
                       name="identity_type"
                       type="text"
                       label="Είδος Ταυτότητας"
                       value={this.props.form.identity_type}
                       onChange={this.props.onChange}/>
                <Input id="identity_number"
                       name="identity_number"
                       type="text"
                       label="Αριθμός Ταυτότητας"
                       value={this.props.form.identity_number}
                       onChange={this.props.onChange}/>
                <Input id="identity_issue_date"
                       name="identity_issue_date"
                       type="text"
                       label="Ημερομηνία Έκδοσης"
                       value={this.props.form.identity_issue_date}
                       onChange={this.props.onChange}/>
                <Input id="identity_issuing_authority"
                       name="identity_issuing_authority"
                       type="text"
                       label="Εκδούσα Αρχή"
                       value={this.props.form.identity_issuing_authority}
                       onChange={this.props.onChange}/>
              </div>
              <span>Διεύθυνση Κατοικίας</span>
              <Input id="country"
                     name="country"
                     type="text"
                     label="Χώρα"
                     value={this.props.form.country}
                     onChange={this.props.onChange}/>
              <Input id="postcode"
                     name="postcode"
                     type="text"
                     label="Τ.Κ."
                     value={this.props.form.postcode}
                     onChange={this.props.onChange}/>
              <Input id="address"
                     name="address"
                     type="text"
                     label="Διεύθυνση"
                     value={this.props.form.address}
                     onChange={this.props.onChange}/>
              <Input id="municipality"
                     name="municipality"
                     type="text"
                     label="Δήμος"
                     value={this.props.form.municipality}
                     onChange={this.props.onChange}/>
              <span>Οικογενειακή Κατάσταση</span>
              <Input id="marital_status"
                     name="marital_status"
                     type="text"
                     label="Κατάσταση"
                     value={this.props.form.marital_status}
                     onChange={this.props.onChange}/>
              <Input id="marriage_date"
                     name="marriage_date"
                     type="text"
                     label="Ημερομηνία Γάμου"
                     value={this.props.form.marriage_date}
                     onChange={this.props.onChange}/>
              <Input id="partner_tax_number"
                     name="partner_tax_number"
                     type="text"
                     label="ΑΦΜ Συζύγου"
                     value={this.props.form.partner_tax_number}
                     onChange={this.props.onChange}/>
              <div className={styles.input}>
                <Input id="partner_first_name"
                       name="partner_first_name"
                       type="text"
                       label="Όνομα Συζύγου"
                       value={this.props.form.partner_first_name}
                       onChange={this.props.onChange}/>
                <Input id="partner_last_name"
                       name="partner_last_name"
                       type="text"
                       label="Επώνυμο Συζύγου"
                       value={this.props.form.partner_last_name}
                       onChange={this.props.onChange}/>
              </div>
            </div>
	);
    }
}

export{Content};
