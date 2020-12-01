@RestResource(urlMapping='/Webhook/*')
global without sharing class RESTWebhook
{
    @HttpPost
    global static void doPost()
    {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String reqst = req.requestBody.toString();
		List<RestParserExample> mydata = RestParserExample.parse(reqst);
	
    	System.debug('mydata'+mydata);
        for(RestParserExample rpe :mydata ){
            System.debug('=rpe='+rpe.email);
            
            
        }
        
        
        
    }

}