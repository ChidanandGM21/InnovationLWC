import { LightningElement, track } from 'lwc';
export default class lwc6LdsCreateRec extends LightningElement {

    handleSuccess(event) { 

        const recId = event.detail.id;
        console.log('=rec Id=' + recId);
        //alert('=recId='+recId);
    }
}