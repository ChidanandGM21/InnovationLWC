import { LightningElement, track, wire } from 'lwc';
import mapStringList from '@salesforce/apex/MapExample.returnMapSL';
export default class lwc24Mapsl extends LightningElement {

    @track mapsl = [];

    @wire(mapStringList)
    cntryStateMap({ data, error }) {

        if (data) { 
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.mapsl.push({ key: key, value: data[key] });
                }
            }
            //alert('=map='+this.mapsl);
        }
        else if (error) {
            window.console.log(error);
        }

    }
}