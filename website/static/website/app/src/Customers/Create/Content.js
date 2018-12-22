import styles from '../../../../css/src/Customers/Create/Content.css';
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
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Χρήστη"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Κωδικός Πρόσβασης"
                       value=""/>
              </div>
              <span>Στοιχεία ΙΚΑ</span>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Χρήστη"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Κωδικός Πρόσβασης"
                       value=""/>
              </div>
              <span>Στοιχεία ΓΕΜΗ</span>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Χρήστη"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Κωδικός Πρόσβασης"
                       value=""/>
              </div>
              <span>Προσωπικά στοιχεία</span>
              <Input id="test"
                     name="test"
                     type="text"
                     label="ΑΦΜ"
                     value=""/>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Επώνυμο"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Επώνυμο 2"
                       value=""/>
              </div>
            <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Πατέρα"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Επώνυμο Πατέρα"
                       value=""/>
              </div>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Μητέρας"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Πατρικό Επώνυμο Μητέρας"
                       value=""/>
              </div>
            <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Ημερομηνία Γέννησης"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Ημερομηνία Θανάτου"
                       value=""/>
              </div>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Χώρα Γέννησης"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Φύλο"
                       value=""/>
              </div>
            <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Υπηκοότητα"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Ιθαγένεια"
                       value=""/>
              </div>
              <span>Στοιχεία Επικοινωνίας</span>
            <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Σταθερό Τηλέφωνο"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Κινητό Τηλέφωνο"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Fax"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="E-mail"
                       value=""/>
              </div>
              <span>Στοιχεία Ταυτότητας</span>
            <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Είδος Ταυτότητας"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Αριθμός Ταυτότητας"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Ημερομηνία Έκδοσης"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Εκδούσα Αρχή"
                       value=""/>
              </div>
              <span>Διεύθυνση Κατοικίας</span>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Χώρα"
                     value=""/>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Τ.Κ."
                     value=""/>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Διεύθυνση"
                     value=""/>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Δήμος"
                     value=""/>
              <span>Οικογενειακή Κατάσταση</span>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Κατάσταση"
                     value=""/>
              <Input id="test"
                     name="test"
                     type="text"
                     label="Ημερομηνία Γάμου"
                     value=""/>
              <Input id="test"
                     name="test"
                     type="text"
                     label="ΑΦΜ Συζύγου"
                     value=""/>
              <div className={styles.input}>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Όνομα Συζύγου"
                       value=""/>
                <Input id="test"
                       name="test"
                       type="text"
                       label="Επώνυμο Συζύγου"
                       value=""/>
              </div>
            </div>
	);
    }
}

export{Content};
