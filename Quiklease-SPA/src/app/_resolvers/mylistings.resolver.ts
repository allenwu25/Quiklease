import {Injectable} from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListingService } from '../_services/listing.service';
import { Listing } from '../_models/listing';
import { AuthService } from '../_services/auth.service';


@Injectable()

export class MylistingsResolver implements Resolve<Listing[]> {
    
    constructor(private listingService: ListingService, private router: Router,
         private alertify: AlertifyService, private authService: AuthService) {};
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Listing[]> {
        return this.listingService.getUserListings(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}