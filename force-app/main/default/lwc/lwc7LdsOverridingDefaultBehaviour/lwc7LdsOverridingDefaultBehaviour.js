import { LightningElement, track } from 'lwc';
export default class lwc7LdsOverridingDefaultBehaviour extends LightningElement {
    handleSubmit(event) {
        event.preventDefault(); // Stop the form from Submitting
        const fields = event.detail.fields;
        //alert(JSON.stringify(fields));
        fields.Type = 'Prospect';
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleSuccess(event) { 
        const recId = event.detail.id;
        //alert(recId);
    }


}