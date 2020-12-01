import { LightningElement, track,wire } from 'lwc';
import getMapOfDataSS from '@salesforce/apex/MapExample.returnMapSS';
export default class lwc23Mapss extends LightningElement {
    @track mapss = [];

    @wire(getMapOfDataSS)
    dataMap({ data, error }) {
        if (data) {
            for (let key in data) { 
                if (data.hasOwnProperty(key)) {
                    this.mapss.push({ key: key,value:data[key]});
                }
            }
            
        }
    }
}