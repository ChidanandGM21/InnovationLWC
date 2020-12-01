({
	doInit : function(component, event, helper) {
		var countryList = [];
        countryList.push('IN','US');
        component.set('v.countryList',countryList);
        
        var action = component.get("c.countryStateMap");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                this.onRender();
               component.set("v.csMap",response.getReturnValue());
            }
        });

        
        $A.enqueueAction(action);
        
	},
    stateChanged: function(component,event,helper){
        var rowId = event.target.id.split('_')[0];
        alert(rowId);
        var stateSelected = event.target.value;
        var citySelElem = component.find('parent-aura-div-id').getElement().querySelector('[id="'+rowId + '_city"]');
        var stateCityMap = component.get('v.stateCityMap');
        var cityArray = stateCityMap[stateSelected];
        var innerHTMLVar = '';
        //alert();
        for (var i = 0; i < cityArray.length; i++) {
            innerHTMLVar = innerHTMLVar + '<option value="' + cityArray[i]+ '">' +cityArray[i] +'</option>';  
        }
        citySelElem.innerHTML = innerHTMLVar;
        this.onRender();
    },
    onRender : function(component,event,helper){
        debugger;
        alert('hey');
        console.log('From Render method');
        var rootElem = component.find('parent-aura-div-id').getElement();
        alert(rootElem);
        var stateElemArray = rootElem.querySelectorAll('select[id$="_state"]');
        alert('=sea='+stateElemArray);
        var stateCityMap = component.get('v.csMap');
        alert('=stateCityMap='+stateCityMap);
        var dataArray = component.get('v.dataArray');
        alert(stateElemArray.length);
        for (var i = 0; i < stateElemArray.length; i++) {
            console.log(stateElemArray[i].value);
            var rowId = stateElemArray[i].id.split('_')[0];
            alert('=rowId='+rowId);
            var citySelElem = rootElem.querySelector('select[id$="' + rowId +'_city"]');
            var cityArray = stateCityMap[stateElemArray[i].value];
            var innerHTMLVar = '';
            alert(cityArray.length);
            for (var j = 0; j < cityArray.length; j++) {
                
                if(cityArray[j] == dataArray[rowId-1].city){
                    innerHTMLVar = innerHTMLVar + '<option value="' + cityArray[j]+ '" selected="true">'+ cityArray[j] +'</option>';    
                }else{
                    innerHTMLVar = innerHTMLVar + '<option value="' + cityArray[j]+ '">'+ cityArray[j] +'</option>';
                }
            } 
            citySelElem.innerHTML = innerHTMLVar;           
        }
    }
})