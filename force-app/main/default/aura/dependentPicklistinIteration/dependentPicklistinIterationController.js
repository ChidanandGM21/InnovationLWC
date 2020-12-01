({

    doInit: function(component,event,helper){
        var dataArray = [];
        dataArray.push({name:'1',state:'MA',city:'Boston'},{name:'2',state:'NY',city:'NYC'});
        component.set('v.dataArray',dataArray);

        var stateList = [];
        stateList.push('MA','NY');
        component.set('v.stateList',stateList); 

        var stateCityMap = {};
        stateCityMap['MA'] = [];
        stateCityMap['MA'].push('Boston','Boston_X');
        stateCityMap['NY'] = [];
        stateCityMap['NY'].push('NYC','NYC_X');
        component.set('v.stateCityMap',stateCityMap);               
    },

    stateChanged: function(component,event,helper){
        var rowId = event.target.id.split('_')[0];
        //alert(rowId);
        var stateSelected = event.target.value;
        var citySelElem = component.find('parent-aura-div-id').getElement().querySelector('[id="'+rowId + '_city"]');
        var stateCityMap = component.get('v.stateCityMap');
        var cityArray = stateCityMap[stateSelected];
        var innerHTMLVar = '';
        for (var i = 0; i < cityArray.length; i++) {
            innerHTMLVar = innerHTMLVar + '<option value="' + cityArray[i]+ '">' +cityArray[i] +'</option>';  
        }
        citySelElem.innerHTML = innerHTMLVar;
    },
    onRender : function(component,event,helper){
        debugger;
        console.log('From Render method');
        var rootElem = component.find('parent-aura-div-id').getElement();
        //alert('=='+rootElem);
        var stateElemArray = rootElem.querySelectorAll('select[id$="_state"]');
        var stateCityMap = component.get('v.stateCityMap');
        var dataArray = component.get('v.dataArray');
        for (var i = 0; i < stateElemArray.length; i++) {
            console.log(stateElemArray[i].value);
            var rowId = stateElemArray[i].id.split('_')[0];
            var citySelElem = rootElem.querySelector('select[id$="' + rowId +'_city"]');
            var cityArray = stateCityMap[stateElemArray[i].value];
            var innerHTMLVar = '';
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