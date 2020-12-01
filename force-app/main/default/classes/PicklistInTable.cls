public class PicklistInTable {
    
    
    
    @AuraEnabled 
    Public static List<String> fetchState(String Country){
        List<String> state = new List<String>();
        List<String> ctry = new List<String>();
        if(Country == 'IN'){
            state.add('KA');
            State.add('AP');
            return state;
            
        }
        else if(Country == 'US'){
            ctry.add('CA');
            ctry.add('NL');
            return ctry;
        }
        else{
            return null;
        }
    }
    
    @AuraEnabled
    Public static List<String> countries(){
        List<String> cnList = new List<String>();
        cnList.add('IN');
        cnList.add('US');
        return cnList;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<wrapCountryState> wrapcsList(){
        List<wrapCountryState> wcs = new List<wrapCountryState>();
        List<Account> ac = [select Id,Name,Country__c,State__c from Account Limit1];
        wrapCountryState wrap = new wrapCountryState();
        wrap.acc=ac[0];
        wrap.countryList.add('IN');
        wrap.countryList.add('US');
        wcs.add(wrap);
        System.debug('=wcs='+wcs);
        return wcs;
    }
    
    public class wrapCountryState{
        @AuraEnabled 
        public Account acc;
        @AuraEnabled 
        public List<String> countryList;
        @AuraEnabled 
        public List<String> stateList;
        
        public wrapCountryState(){
            acc= new Account();
            countryList = new List<String>();
            stateList = new List<String>();
        }

    }
    
}