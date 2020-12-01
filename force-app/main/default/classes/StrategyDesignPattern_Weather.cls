/*
 * Context Class.
 * Strategies can be executed with the below code
 * StrategyDesignPattern_Weather weather = new StrategyDesignPattern_Weather('Europe');
   Double tempCel = weather.getTemperatureInCelsius();
   Double tempFar = weather.getTemperatureInFarhenheit();
 * https://www.sudipta-deb.in/2015/06/implementing-strategy-design-pattern-in.html
 */
public class StrategyDesignPattern_Weather {
    private StrategyDesignPattern_WeatherService weatherServiceType;
    
    Private Set<String> forecastTypeCountries = new Set<String>{'United Kingdom','Europe','North America'};
    
        public StrategyDesignPattern_Weather(String Continent){
            if(forecastTypeCountries.contains(Continent)){
                weatherServiceType = new WeatherForecastType1();
            }
            
        }
    
    public Double getTemperatureInCelcius(){
        return weatherServiceType.getTemperatureInCelcius();
    }
    public Double getTemperatureInFarhenheit() {
        return weatherServiceType.getTemperatureInFarhenheit();
    }
    
    
}