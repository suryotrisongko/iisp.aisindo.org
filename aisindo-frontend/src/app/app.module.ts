import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.component';
import {Login} from './components/login.component';
import {NavBar} from './components/nav-bar.component';

import {LoginService} from './services/login.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {UserService} from './services/user.service';
import {ExpertService} from './services/expert.service';
import {SpecializationService} from './services/specialization.service';

import {FooterComponent} from './components/footer.component';
import {HelpdeskComponent} from './components/helpdesk.component';
import {FeaturedExpertsComponent} from './components/featured-experts.component';
import {LatestNewsComponent} from './components/latest-news.component';
import {ExpertSearchBoxComponent} from './components/expert-search-box.component';

import {ExpertDetail} from './components/expert-detail.component';
import {ExpertsDatabase} from './components/experts-database.component';

import { EqualValidator } from './shared/equal-validator.directive';
import {BusyModule} from 'angular2-busy';

import {Forgotpassword} from './components/forgotpassword.component';
import { DialogService } from './services/dialog.service';

import {Register} from './components/register.component';
import {MembershipRegistration} from './components/membership-registration.component';
import {EditProfile} from './components/edit-profile.component';
import {UpdatePdu} from './components/update-pdu.component';
import {PduService} from './services/pdu.service';

import {ReplaceSpacePipe} from './shared/replace-space.pipe';
import {DateToIso} from './shared/date-to-iso.pipe';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {ListUserComponent} from './components/list-user.component';
import {ListPduComponent} from './components/list-pdu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Login,
    NavBar,
    Register,
    MembershipRegistration,
    EditProfile,
    UpdatePdu,
    FooterComponent,
    HelpdeskComponent,
    LatestNewsComponent,
    ExpertSearchBoxComponent,
    FeaturedExpertsComponent,
    ExpertDetail,
    ExpertsDatabase,
    ReplaceSpacePipe,
    DateToIso,
    EqualValidator,
    Forgotpassword,
    ListUserComponent,
    ListPduComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    BusyModule
  ],
  providers: [
    LoginService,
    UploadPhotoService,
    UserService,
    ExpertService,
    SpecializationService,
    DialogService,
    PduService,
	{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
