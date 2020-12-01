public with sharing class SingletonClassExample1 {
    Private static SingletonClassExample1 SingletonClassExample1Instance = null;
    public boolean isSyncEnabled;
    
    private SingletonClassExample1(){
        Integration__c mdmIntegration = Integration__c.getValues('MDM');
        isSyncEnabled = mdmIntegration.isEabled__c;
    }
    Public static SingletonClassExample1 getSingletonClassExample1Instance(){
        
        if(SingletonClassExample1Instance == null){
            
            SingletonClassExample1Instance = new SingletonClassExample1();
            
        }
        return SingletonClassExample1Instance;
    }
}