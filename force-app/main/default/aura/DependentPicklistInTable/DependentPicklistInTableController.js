({
    doInit : function(component, event, helper) {
        var getAllAccountList = component.get("c.wrapcsList");
        //alert('1');
        getAllAccountList.setCallback(this, function(response) {
            var state = response.getState();
            //alert('=state='+state);
            if(component.isValid() && state === "SUCCESS"){
                var AccList = { 'sobjectType': 'Account',
                               'Country__c': '',
                               'State__c': '',
                               
                              };
                // alert(response.getReturnValue());
                var allAccs =  AccList;               
                component.set('v.acList',allAccs);
            }
            
        });
        
        $A.enqueueAction(getAllAccountList);
        
        //Country
        
        var getCountries = component.get("c.countries");
        //alert('1');
        getCountries.setCallback(this, function(response) {
            var state = response.getState();
            //alert('=state='+state);
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.cntrylst",response.getReturnValue());
            }
            
        });
        
        $A.enqueueAction(getCountries);
        
    },
    
    findState : function(component,event,helper){
        
        var makePos = event.target.className;
        //alert('=Before Parse='+JSON.stringify(component.get('v.acList')));
        //var accListArray = JSON.parse(JSON.stringify(component.get('v.acList')));
        var accListArray = component.get('v.acList');
        //alert('=After Parse accListArray='+JSON.stringify(accListArray));
        
        var country = accListArray[makePos].Account.Country__c;
        
        var action = component.get("c.fetchState");
        action.setParams({ Country :  country});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if( state === "SUCCESS"){
                //alert(JSON.stringify(response.getReturnValue()));
                accListArray[makePos].stateList =  response.getReturnValue();
                component.set('v.acList', accListArray);
            }
            
        });
        
        $A.enqueueAction(action); 
        
        
    },
    
    AddNewRow :  function(component, event, helper) {
        var accountListArray = component.get("v.acList");
        accountListArray.push({'sobject':'Account','Country__c':'','State__c':''});
        component.set("v.acList",accountListArray);
        // alert('=heloo=')
    },
})