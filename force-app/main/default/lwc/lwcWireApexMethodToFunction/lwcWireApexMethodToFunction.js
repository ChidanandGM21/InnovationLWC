import { LightningElement, track,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class lwcWireApexMethodToFunction extends LightningElement {

    @track contacts;
    @track error;

    @wire(getContactList)
    wiredContacts({ data, error }) {

        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

}