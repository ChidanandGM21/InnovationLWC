import { LightningElement, track } from 'lwc';
export default class lwc21EventsProgramatically extends LightningElement {

    handleResponse(event) {
        event.target.disabled = true;
        const btnName = event.target.label;
        const answerEvent = new CustomEvent("answer", { detail: btnName, bubbles: true});
        this.dispatchEvent(answerEvent);
        //alert('=Heloooo=');
        
    }
}