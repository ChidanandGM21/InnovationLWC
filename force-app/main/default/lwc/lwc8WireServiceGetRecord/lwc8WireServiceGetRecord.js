import { LightningElement, api, track, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
const FIELDS = [
    'Account.Name',
    'Account.AnnualRevenue',
    'Account.NumberOfEmployees',
    'Account.Phone',
];
export default class lwc8WireServiceGetRecord extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    get name() { 
        //alert(JSON.stringify(this));
        return this.account.data.fields.Name.value;
    }

    get annualRevenue() { 
        return this.account.data.fields.AnnualRevenue.value;
    }

    get numberOfEmployees() {
        return this.account.data.fields.NumberOfEmployes.value;
    }

    get phone() { 
        return this.account.data.fields.Phone.value;
    }

}