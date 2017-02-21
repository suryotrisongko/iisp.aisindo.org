import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{

  constructor (private loginService:LoginService) {}

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
