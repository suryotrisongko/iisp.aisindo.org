import {Component, Input} from '@angular/core';
import {NavBar} from './nav-bar.component';
import {Expert} from '../models/expert';
import {ExpertService} from '../services/expert.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import { ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {DateToIso} from '../shared/date-to-iso.pipe';

@Component({
  selector: 'expert-detail',
  templateUrl: './expert-detail.component.html'
})
export class ExpertDetail {
  expert: Expert=new Expert();
  user: User;
  expertId: number;

  constructor (private loginService:LoginService, private expertService: ExpertService, private userService: UserService, private route: ActivatedRoute){
     this.route.params.forEach((params: Params) => {
     this.expertId = Number.parseInt(params['userId']);
    });


    this.expertService.getExpertByUserId(this.expertId).subscribe(
      expert => {
        this.expert = JSON.parse(JSON.parse(JSON.stringify(expert))._body);
      },
      error => console.log(error)
    );
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {

  }

}
