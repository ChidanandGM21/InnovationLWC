public class RestParserExample {
    
    public String pid;
    public String email;
    public String phone;
    public String fname;
    public String lname;
    
    
    public static List<RestParserExample> parse(String json) {
        return (List<RestParserExample>) System.JSON.deserialize(json, List<RestParserExample>.class);
    }
}