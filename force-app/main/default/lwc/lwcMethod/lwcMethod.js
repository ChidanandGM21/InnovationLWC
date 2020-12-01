import { LightningElement, track,api } from 'lwc';
export default class lwcMethod extends LightningElement {
    @track updatedCase;

    @api
    changeUpperCase(phrase) {
        this.updatedCase = phrase.toUpperCase();
    }
}