import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';
export default class lwc17EventFirePubSub extends LightningElement {
    @track log = '';
    captEvent(evt) {
        this.log = this.log + ' ' + evt.detail;
        pubsub.fire('uniqueEventId', evt.detail);
    }
}