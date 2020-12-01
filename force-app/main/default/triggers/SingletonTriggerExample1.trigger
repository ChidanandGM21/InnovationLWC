trigger SingletonTriggerExample1 on Account (before insert) {
/* check problem here
 * https://www.sudipta-deb.in/2015/05/implementing-singleton-design-pattern.html
   https://www.sudipta-deb.in/2015/06/implementing-singleton-design-pattern_5.html
   https://www.sudipta-deb.in/2015/06/implementing-singleton-design-pattern.html
 */
 
    for(Account acc : trigger.new){
        SingletonClassExample1 mySingletonClassExample1 =  SingletonClassExample1.getSingletonClassExample1Instance();
        if(mySingletonClassExample1.isSyncEnabled){
            
          //Write the logic  
        }
        else{
            
          //Do Nothing
        }
    }

}