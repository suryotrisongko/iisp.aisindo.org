import {Component, Input} from '@angular/core';
import {NavBar} from './nav-bar.component';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent {
  selectedUser: User;
  users: User[];

  constructor ( private userService: UserService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {

    this.userService.allUser().subscribe(
      users => {
        this.users = JSON.parse(JSON.parse(JSON.stringify(users))._body);
      },
      error => console.log(error)
    );

  }

  onSelect(user:User) {
      this.selectedUser = user;
      this.router.navigate(['/edit-profile', this.selectedUser.email]);
  }
}
