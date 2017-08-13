import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apiKey = '1ff6a3ec70686638';
 url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/1ff6a3ec70686638/conditions/q';
  }

getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res=>res.json());
}

}
