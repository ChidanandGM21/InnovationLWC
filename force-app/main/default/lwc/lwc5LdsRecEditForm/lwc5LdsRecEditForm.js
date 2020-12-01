import { LightningElement, api } from 'lwc';
export default class lwc5LdsRecEditForm extends LightningElement {
    @api recordId;

    handleSuccess(event) { 
        //const recId = JSON.stringify(event.detail.id);
        const recId = event.detail.id;
        console.log('=recId=' + recId);
        //alert(recId);
    }

    handleSubmit(event) {

    }
}