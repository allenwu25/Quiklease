import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Listing } from 'src/app/_models/listing';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ListingService } from 'src/app/_services/listing.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-mylistings-edit',
  templateUrl: './mylistings-edit.component.html',
  styleUrls: ['./mylistings-edit.component.css']
})
export class MylistingsEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  listing: Listing;

  constructor(private route: ActivatedRoute,
    private alertify: AlertifyService,
    private listingService: ListingService,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.listing = data ['listing'];
    });
  }

  updateListing() {
    this.listingService.updatelisting(this.listing.id, this.listing).subscribe(next => {
      this.alertify.success("Profile updated.");
      this.editForm.reset(this.listing);
    }, error => {
      this.alertify.error(error);
    });
  }

}
