import {Injectable} from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListingService } from '../_services/listing.service';
import { Listing } from '../_models/listing';


@Injectable()

export class ListingsResolver implements Resolve<Listing[]> {
    
    constructor(private listingService: ListingService, private router: Router,
         private alertify: AlertifyService) {};
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Listing[]> {
        return this.listingService.getListings().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}