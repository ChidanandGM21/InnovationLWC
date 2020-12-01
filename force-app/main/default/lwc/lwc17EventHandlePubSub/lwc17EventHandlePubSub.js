import { LightningElement, track,api } from 'lwc';
import pubsub from 'c/pubsub';
export default class lwc17EventHandlePubSub extends LightningElement {
    @track data;
    eventFiredCallback;

    eventFired(event) {
        //alert('1');
        this.data = event;
        //alert('=event from other component got fired='+this.data);
    }

    connectedCallback() {
        //alert('2');
        this.data = 'callback';
        //alert('=THIS='+this);
        //alert('=This='+JSON.stringify(this));
        this.eventFiredCallback = this.eventFired.bind(this);
        this.register();  
    }

    @api
    register() {

        //alert('3');
        this.data += ' -register';
        pubsub.register('uniqueEventId',this.eventFiredCallback);
    }
    


}