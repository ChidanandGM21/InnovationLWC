import { LightningElement, track } from 'lwc';
export default class lwc16EventParent extends LightningElement {

    @track log = '';

    modelclick(e) {

        this.log = this.log + ' Captured Event - ' + e.detail + ' ';
        const event = new CustomEvent('modelclick', {
            detail: 'Event Started in Tesla'
        });

        this.dispatchEvent(event);
        
    }

}