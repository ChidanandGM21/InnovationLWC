import { LightningElement, track } from 'lwc';
export default class lWC17EventHandlingParentChildBubbling_Parent extends LightningElement {
    @track log = '';
    customClick() {

        const event = new CustomEvent('modelclick', {

            detail: 'Event Started in Child Component'

        });

        this.dispatchEvent(event);
        this.log = 'Child Clicked!!';
    }
}