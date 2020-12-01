import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/publishersubscriber';
import { CurrentPageReference } from 'lightning/navigation';
export default class lwc19Subscribers extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;
    @track updatedColor;

    connectedCallback() {
        //alert('subscriber');
        registerListener("changedColor", this.handleChangedColor, this);
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handleChangedColor(colorCode) {
        //alert(colorCode);
        console.log('color-->' + colorCode);
        this.color = colorCode;
        //this.updatedColor = 'background-color:'+this.color;
    }

    get colorStyle() {
        //alert('-oye-');
        return `background-color: ${this.color}`;

    }
}