import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listingfolder/listings/listings.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListingCardComponent } from './listingfolder/listing-card/listing-card.component';
import { ListingDetailComponent } from './listingfolder/listing-detail/listing-detail.component';
import { ListingDetailResolver } from './_resolvers/listing-detail.resolver';
import { ListingsResolver } from './_resolvers/listings.resolver';
import { MylistingsComponent } from './listingfolder/mylistings/mylistings.component';
import { MylistingsResolver } from './_resolvers/mylistings.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'listings', component: ListingsComponent, canActivate: [AuthGuard], resolve: {listings: ListingsResolver}},
    { path: 'listings/:id', component: ListingDetailComponent, canActivate: [AuthGuard], resolve: {listing: ListingDetailResolver}},
    { path: 'mylistings', component: MylistingsComponent, canActivate: [AuthGuard], resolve: {listings: MylistingsResolver}},
    { path: 'map', component: MapComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
]