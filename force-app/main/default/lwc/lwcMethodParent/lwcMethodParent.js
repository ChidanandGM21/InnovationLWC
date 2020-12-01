import { LightningElement, track } from 'lwc';
export default class lwcMethodParent extends LightningElement {

    handlePhraseChange(event) {

        this.template.querySelector('c-lwc-Method').changeUpperCase(event.target.value);
        
    }
}