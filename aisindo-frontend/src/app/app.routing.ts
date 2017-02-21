import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { Login }  from './components/login.component';

import { ExpertDetail }  from './components/expert-detail.component';
import { ExpertsDatabase }  from './components/experts-database.component';

import { Register }  from './components/register.component';
import { MembershipRegistration }  from './components/membership-registration.component';
import { EditProfile }  from './components/edit-profile.component';
import { UpdatePdu }  from './components/update-pdu.component';
import { ListUserComponent }  from './components/list-user.component';
import { ListPduComponent }  from './components/list-pdu.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'expert-detail/:userId',
    component: ExpertDetail
  },
  {
    path: 'experts-database',
    component: ExpertsDatabase
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'membership-registration',
    component: MembershipRegistration
  },
  {
    path: 'edit-profile',
    component: EditProfile
  },
  {
    path: 'edit-profile/:userEmail',
    component: EditProfile
  },
  {
    path: 'update-pdu',
    component: UpdatePdu
  },
  {
    path: 'update-pdu/:userEmail',
    component: UpdatePdu
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  {
    path: 'list-pdu',
    component: ListPduComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
