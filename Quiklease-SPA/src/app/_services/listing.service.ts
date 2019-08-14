import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Listing } from '../_models/listing';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  baseUrl = environment.apiUrl;
  

constructor(private http: HttpClient) { }
  getUsers(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.baseUrl + 'listings');
  }

  getUserListings(userid): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.baseUrl + 'listings/mylistings/' + userid);
  }

  getListing(id): Observable<Listing> {
    return this.http.get<Listing>(this.baseUrl + 'listings/' + id);
  }

  addlisting(listing: Listing) {
    return this.http.post(this.baseUrl + 'listings/', listing);
  }

  updatelisting(id: number, listing: Listing) {
    return this.http.put(this.baseUrl + 'listings/' + id, listing);
  }

  setMainPhoto(listingId: number, id: number) {
    return this.http.post(this.baseUrl + 'listings/' + listingId + '/photos/' + id + '/setMain', {});
  }

  deletePhoto(listingId: number, id: number) {
    return this.http.delete(this.baseUrl + 'listings/' + listingId + '/photos/' + id);
  }

  deleteListing(listingId: number) {
    return this.http.delete(this.baseUrl + 'listings/' + listingId);
  }

}
