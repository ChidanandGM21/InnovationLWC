import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class lwc9WireServiceCreateRecord extends LightningElement {

    @track accountId;
    name = '';

    handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
        //alert(this.name);
    }

    createAccount() {
        //alert('hey');
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        alert(this.name);
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        //alert(recordInput);
        //alert('hey');
        createRecord(recordInput)
            .then(account => {
                //alert('heloo broo');
                this.accountId = account.id;
                alert('-Account-'+account.id);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account Created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error Creating Record',
                        message: error.body.message,
                        variant:'error',
                    }),
                );
            });
    }
}