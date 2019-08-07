import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';

import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorinterceptorProvide } from './_services/errorinterceptor';
import { AlertifyService } from './_services/alertify.service';
import { MapComponent } from './map/map.component';
import { ListingsComponent } from './listingfolder/listings/listings.component';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { ListingService } from './_services/listing.service';
import { ListingCardComponent } from './listingfolder/listing-card/listing-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ListingDetailComponent } from './listingfolder/listing-detail/listing-detail.component';
import { ListingDetailResolver } from './_resolvers/listing-detail.resolver';
import { ListingsResolver } from './_resolvers/listings.resolver';
import { MylistingsComponent } from './listingfolder/mylistings/mylistings.component';
import { MylistingsResolver } from './_resolvers/mylistings.resolver';
import { MylistingsAddComponent } from './listingfolder/mylistings-add/mylistings-add.component';
import { PhotoEditorComponent } from './listingfolder/photo-editor/photo-editor.component';
import { MylistingsEditComponent } from './listingfolder/mylistings-edit/mylistings-edit.component';
import { MylistingsEditResolver } from './_resolvers/mylistings-edit.resolver';
import { LoginComponent } from './login/login.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MapComponent,
      ListingsComponent,
      ListingCardComponent,
      ListingDetailComponent,
      MylistingsComponent,
      MylistingsAddComponent,
      MylistingsEditComponent,
      PhotoEditorComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5001'],
            blacklistedRoutes: ['localhost:5001/api/auth']
         }
      }),
      NgxGalleryModule,
      FileUploadModule,
      ReactiveFormsModule
   ],
   providers: [
      AuthService,
      ErrorinterceptorProvide,
      AlertifyService,
      AuthGuard,
      ListingService,
      ListingDetailResolver,
      ListingsResolver,
      MylistingsResolver,
      MylistingsEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
