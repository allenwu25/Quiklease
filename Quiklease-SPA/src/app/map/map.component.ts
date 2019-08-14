import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../_services/geocode.service';
import { ListingService } from '../_services/listing.service';
import { Listing } from '../_models/listing';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Marker } from '../_models/marker';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  listings: Listing[];
  locations: Marker[] = [];
  latitude = 43.4723;
  longitude = -80.5449;
  mylabel= "🏠";
  baseUrl = environment.apiUrl;
  constructor(private coordservice: GeocodeService, private listingservice: ListingService, private route: ActivatedRoute) { }

  

  

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.listings = data['listings'];
    });

this.getcoords();

  }

  getcoords() {
    this.listings.forEach(element => {
      this.coordservice.getcoords(element.address).subscribe((results) => {
        this.getlocation(element, results);
      }, error => {
        console.log(error);
      })
    });
  }

  getlocation(element, results) {
    this.locations.push({
      'title': element.title,
      'address' : element.address,
      'latitude' : results.results[0].locations[0].latLng.lat,
      'longitude' : results.results[0].locations[0].latLng.lng,
      'urlid' : element.id
    });
  }

  

}
