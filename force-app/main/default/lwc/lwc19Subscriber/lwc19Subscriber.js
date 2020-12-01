import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/publishersubscriber';
import { CurrentPageReference } from 'lightning/navigation';
export default class lwc19Subscriber extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        alert('subscriber');
        registerListener("changedColor",this.handleChangedColor,this);
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handleChangedColor(colorCode) {
        alert(colorCode);
        console.log('color-->' + colorCode);
        this.color = colorCode;
    }

    get colorStyle() {
        return 'background-color: ${this.color}';
    }
}