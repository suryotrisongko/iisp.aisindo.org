import {Component, Input} from '@angular/core';
import {NavBar} from './nav-bar.component';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import {Expert} from '../models/expert';
import {ExpertService} from '../services/expert.service';
import {Specialization} from '../models/specialization';
import {SpecializationService} from '../services/specialization.service';

@Component({
  selector: 'experts-database',
  templateUrl: './experts-database.component.html'
})
export class ExpertsDatabase {
  filterspecialization: string;
  experts: Expert[];
  specializations: Specialization[];
  selectedExpert: Expert;
  private model = {'keyword':'', 'expertise':'', 'location':''};

  constructor ( private expertService: ExpertService,  private specializationService: SpecializationService, private userService: UserService, private router: Router, private route: ActivatedRoute){
    this.filterspecialization = '';
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {
    this.updateData();
  }

  onSubmit() {
      this.router.navigate(['/experts-database', this.model ]);
      this.updateData();
  }

  updateData() {
     this.route.params.forEach((params: Params) => {
      this.model.keyword = params['keyword'];
      this.model.expertise = params['expertise'];
      this.model.location = params['location'];
    });

    if(!this.model.keyword) {this.model.keyword = ''};
    if(!this.model.expertise) {this.model.expertise = ''};
    if(!this.model.location) {this.model.location = ''};

    this.expertService.getExpertByKeywordExpertiseLocation(this.model.keyword,this.model.expertise,this.model.location).subscribe(
      experts => {
        this.experts = JSON.parse(JSON.parse(JSON.stringify(experts))._body);
      },
      error => console.log(error)
    );

    this.specializationService.getSpecializations().subscribe(
      specializations => {
        this.specializations = JSON.parse(JSON.parse(JSON.stringify(specializations))._body);
      },
      error => console.log(error)
    );
  }

  onSelect(expert:Expert) {
      this.selectedExpert = expert;
      this.router.navigate(['/expert-detail', this.selectedExpert.userId]);
  }
}
