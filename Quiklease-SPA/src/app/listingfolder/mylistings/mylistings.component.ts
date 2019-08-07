import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/_models/listing';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from 'src/app/_services/listing.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-mylistings',
  templateUrl: './mylistings.component.html',
  styleUrls: ['./mylistings.component.css']
})
export class MylistingsComponent implements OnInit {
  listings: Listing[];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private listingService: ListingService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.getuserlistings();
    console.log(this.authService.decodedToken.nameid);
  }

  getuserlistings() {
    this.route.data.subscribe(data => {
      this.listings = data['listings'];
    });
    console.log(this.listings);

  }

  deleteListing(id) {
    this.alertify.confirm("Do you wish to delete this listing?", () => {
      this.listingService.deleteListing(id).subscribe(() => {
        this.listings.splice(this.listings.findIndex(l => l.id == id), 1);
        this.alertify.success("Listing has been deleted");
      }, error => {
        this.alertify.error(error);
      })
    })
  }

}
