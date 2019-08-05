import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Listing } from 'src/app/_models/listing';
import { ListingService } from 'src/app/_services/listing.service';

@Component({
  selector: 'app-mylistings-add',
  templateUrl: './mylistings-add.component.html',
  styleUrls: ['./mylistings-add.component.css']
})
export class MylistingsAddComponent implements OnInit {
  listing: Listing;
  addForm: FormGroup;
  constructor(private listingService: ListingService, 
    private alertifyService: AlertifyService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createaddlistingsform();
  }

  createaddlistingsform() {
    this.addForm = this.fb.group({
      address: ['', Validators.required],
      phone: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      photoUrl: ['', Validators.required],
      buildingType: ['', Validators.required],
      roomsAvailable: ['', Validators.required]
    });
  }

  addformlisting() {
    if (this.addForm.valid) {
      this.listing = Object.assign({}, this.addForm.value);
      this.listingService.addlisting(this.listing).subscribe(() => {
        this.alertifyService.success('Added Listings');
      }, error => {
        this.alertifyService.error(error);
      }
      );
    }
  }
}
