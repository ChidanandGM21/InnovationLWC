public class CountryState {
    
    @auraEnabled 
    public static Map<String,List<String>> countryStateMap(){
        
        Map<String,List<String>> csMap = new Map<String,List<String>>();
        List<String> l1= new List<String>();
        l1.add('KA');
        l1.add('AP');
        List<String> l2= new List<String>();
        l2.add('TX');
        l2.add('CA');
        csMap.put('IN', l1);
        csMap.put('US', l2);
        return csMap;
        
    }

}