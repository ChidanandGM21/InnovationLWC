import { LightningElement,api, track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const fields = ['Account.invalidField'];
export default class lwc10WireServiceHandleError extends LightningElement {
    @api recordId;
    @track error;
    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ error, record }) {
        if (error) {
            this.error = 'Unknown Error';
            if (Array.isArray(error.body)) {
                this.error = error.body.map(e => e.message).join(',');
            }
            else if (typeof error.body.message === 'string') {
                this.error = error.body.message;
            }
            this.record = undefined;
        }
        else if (data) { 
                //process data
        }


    }

}