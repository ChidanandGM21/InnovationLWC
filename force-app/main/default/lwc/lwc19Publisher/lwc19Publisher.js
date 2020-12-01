import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/publishersubscriber';

export default class lwc19Publisher extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;
    colorCodeOptions = [
        { label: "green", value: "green" },
        { label: "red", value: "red" },
        { label: "yellow", value: "yellow" },
        { label: "blue", value: "blue" }
    ];

    changeColor(event) {
        this.color = event.target.value;
    }

    handleChangeColor() {
        console.log("color src-->" + this.color);
        //alert(this.color);
        fireEvent(this.pageRef, "changedColor", this.color);
    }

}