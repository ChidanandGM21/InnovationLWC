import { LightningElement, track, api,wire } from 'lwc';
import getAccountList from '@salesforce/apex/PicklistInTable.wrapcsList';


export default class lwc26AddDeleteRowsDynamically extends LightningElement {

    @track listOfRecords = [];

    @track map = {};
    //OLD Code


    connectedCallback() {
          let ctries = [];
          let acc = { 'sobjectType': 'Account' };
          acc.Country__c = '';
          acc.State__c = '';
          acc.st = [];
  
          this.listOfRecords = [...this.listOfRecords, acc];
          console.log('=Record List=' + JSON.stringify(this.listOfRecords));
          //alert('=Record List=' + JSON.stringify(this.listOfRecords));
          //Creating Map
          
          this.map["US"] = ["CA", "NJ"];
          this.map["IN"] = ["AP", "KA"];
      }
  
      createRecord() { 
          let rec = { 'sobjectType': 'Account' };
          rec.Country__c = '';
          rec.State__c = '';
          this.listOfRecords = [...this.listOfRecords, rec];
          //alert('=heyy=');
  
      }
  
  
      AddNewRow() { 
         // alert('hjhjghj');
          this.createRecord();
          //alert('=create rec=');
  
      }
  
      get countries() { 
          let countryList = [];
          countryList = [...countryList, { value: 'IN', label: 'IN' }, { value: 'US', label: 'US' }];
          return countryList;
      }
  
      get states() { 
          let stateList = [];
          stateList = [...stateList, { value: 'AP', label: 'AP' }, { value: 'KA', label: 'KA' }, { value: 'CA', label: 'CA' }, {value:'NJ',label:'NJ'}];
          return stateList;
  
      }
  
      handleChange(event) { 
          //alert('hello'+event.target.value);
          //alert('hey');
          //alert('value' + event.target.value);
          //alert('index' + event.target.name);
          let index = event.target.name;
          let selectedCountry = event.target.value;
          let stateToDisplay = this.map[selectedCountry];
          //alert('=states=' + stateToDisplay);
          //alert('==' + JSON.stringify(this.listOfRecords[index].Country__c));
          let sList = [];
          stateToDisplay.forEach(element => {
              //console.log(element);
              sList = [...sList, {value:element,label:element}];
          });
          //alert(sList);
          //alert(JSON.stringify(sList));
          this.listOfRecords[index].st = sList;
          ////this.listOfRecords[index].
  
      }
  

        
    }