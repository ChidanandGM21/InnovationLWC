public class Utilities {
    /* This Utility class involves all the generic code.
* 
* 
* 
* */

    public static List<Schema.FieldSetMember> getFields(String sObj) {
        
        // return SObjectType.Opportunity.FieldSets.opportunityFieldset.getFields();
        
        String fieldSetName = 'opportunityFieldset'; // Pass this dynamically as a parameter
        Map<String, Schema.SObjectType> GlobalDescribeMap = Schema.getGlobalDescribe(); 
        Schema.SObjectType SObjectTypeObj = GlobalDescribeMap.get(sObj);
        Schema.DescribeSObjectResult DescribeSObjectResultObj = SObjectTypeObj.getDescribe();
        Schema.FieldSet fieldSetObj = DescribeSObjectResultObj.FieldSets.getMap().get(fieldSetName); 
        return fieldSetObj.getFields(); 
    }
    
    @AuraEnabled(cacheable=true)
    public static sObject getAccountList(String Id,String sObj) {
        // Convert to schema.sObjectType
        SObjectType objType = Schema.getGlobalDescribe().get(sObj);
        Map<String,Schema.SObjectField> objectFieldMap = objType.getDescribe().fields.getMap();
        System.debug('=objectFieldMap='+objectFieldMap);
        String query = 'SELECT ';
        for(Schema.FieldSetMember f : Utilities.getFields(sObj)) {
            System.debug('==f=='+objectFieldMap.get(f.getLabel()));
            if(objectFieldMap.get(f.getLabel()).getDescribe().isAccessible()) {
                System.debug('=isAccessible='+objectFieldMap.get(f.getLabel()).getDescribe().isAccessible());
                query += f.getFieldPath() + ', ';
            }
        }
        query += 'Id FROM'+sObj+'WHERE ID=\''+Id+'\'';
        System.debug(query);
        return Database.query(query);
    }
}