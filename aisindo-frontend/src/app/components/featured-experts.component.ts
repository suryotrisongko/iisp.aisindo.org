import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ExpertService} from '../services/expert.service';
import {Expert} from '../models/expert';
import {Subscription} from 'rxjs';

@Component({
  selector: 'featured-experts',
  templateUrl: './featured-experts.component.html'
})
export class FeaturedExpertsComponent implements OnInit {

  featuredExperts: Expert[];
  selectedExpert: Expert;
  busy: Subscription;

  constructor (private expertService: ExpertService, private router: Router) {}

  ngOnInit(): void {
    this.busy = this.expertService.getFeaturedxperts().subscribe(
      data => {
        this.featuredExperts = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect(expert:Expert) {
      this.selectedExpert = expert;
      this.router.navigate(['/expert-detail', this.selectedExpert.userId]);
  }
}
