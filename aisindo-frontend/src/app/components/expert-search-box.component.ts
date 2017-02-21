import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'expert-search-box',
  templateUrl: './expert-search-box.component.html'
})
export class ExpertSearchBoxComponent{
  private model = {'keyword':'', 'expertise':'', 'location':''};

  constructor ( private router: Router){
  }

  onSubmit() {
      this.router.navigate(['/experts-database', this.model ]);
  }

}
