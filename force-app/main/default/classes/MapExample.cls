public with sharing class MapExample {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Name LIKE :key LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name,FirstName,LastName, Title, Phone, Email FROM Contact LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Phone, Email  FROM Contact LIMIT 1];
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,String> returnMapSS(){
        Map<String,String> stateCountryMap = new Map<String,String>();
        stateCountryMap.put('KA','India');
        stateCountryMap.put('AP','India');
        stateCountryMap.put('TN','India');
        stateCountryMap.put('MA','USA');
        stateCountryMap.put('CA','USA');
        return stateCountryMap;
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,List<String>> returnMapSL(){
        Map<String,List<String>> countryStateMap = new Map<String,List<String>>();
        countryStateMap.put('India',new List<String>{'KA','AP','TN'});
        countryStateMap.put('USA',new List<String>{'CA','MA','SF'});
        return countryStateMap;
    }
}
