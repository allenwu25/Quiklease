import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/_models/listing';
import { ListingService } from 'src/app/_services/listing.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  listing: Listing;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  numberphotos: number;
  
  constructor(private listingService: ListingService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.listing = data['listing'];
    });
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (let i=0; i< this.listing.photos.length; i++) {
      imageUrls.push({
        small:this.listing.photos[i].photoUrl,
        medium:this.listing.photos[i].photoUrl,
        big:this.listing.photos[i].photoUrl,
        description: ''
      });
    }
    this.numberphotos = imageUrls.length;
    
    return imageUrls;
  }
  

  /*
  loadListing() {
    this.listingService.getListing(this.route.snapshot.params['id'])
    .subscribe((listing: Listing) => {
      this.listing = listing;
    }, error => {
      this.alertify.error(error);
    })
  }
  */

}
