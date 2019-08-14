import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

constructor(private http: HttpClient) { }

getcoords(address) {
  return this.http.get('http://open.mapquestapi.com/geocoding/v1/address?key=nxy2SKBDidHing8LIkHMRJ6FrzEo3ZjR&location=' + address);
}

}
