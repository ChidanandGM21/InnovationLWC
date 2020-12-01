public class TriggerDispatcher {
    Public static void run(TriggerInterface handler,String ObjectName){
        
        if(handler.isDisabled()){
            return;
        }
        
        Bypass_Rules_And_Triggers__c profileCustomSetting = Bypass_Rules_And_Triggers__c.getInstance(UserInfo.getUserId());
        /*
* This will first check access at profile/User level, 
* if there are no profile/user defined then only it will consider OWD Settings
*/
        if((profileCustomSetting.Trigger_Objects__c.contains(ObjectName) && profileCustomSetting.Disable_Triggers__c == false)){
            System.debug('Active trigger');
            
            /* Check Trigger context from trigger operation type.
*/ 
            switch on Trigger.operationType {
                
                When BEFORE_INSERT{
                    handler.beforeInsert(trigger.new);
                }
                When AFTER_INSERT{
                    handler.afterInsert(trigger.new, trigger.newMap);
                }
                When BEFORE_UPDATE{
                    handler.beforeUpdate(trigger.new, trigger.newMap,trigger.old,trigger.oldMap);
                }
                When AFTER_UPDATE{
                    handler.afterUpdate(trigger.new,trigger.newMap,trigger.old,trigger.oldMap);
                }
                when BEFORE_DELETE{
                    handler.beforeDelete(trigger.old, trigger.oldMap);
                }
                When AFTER_DELETE{
                    handler.afterDelete(trigger.old, trigger.oldMap);
                }
                When AFTER_UNDELETE{
                    handler.afterUndelete(trigger.new, trigger.newMap);
                }
            }
            
            
        }
        
    }
    
    
    
}