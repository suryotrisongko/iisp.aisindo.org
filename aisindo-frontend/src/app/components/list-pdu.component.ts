import {Component, Input} from '@angular/core';
import {NavBar} from './nav-bar.component';
import {PduService} from '../services/pdu.service';
import {Pdu} from '../models/pdu';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pdu',
  templateUrl: './list-pdu.component.html'
})
export class ListPduComponent {
  selectedPdu: Pdu;
  pdus: Pdu[];

  constructor ( private pduService: PduService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {

    this.pduService.allPdu().subscribe(
      pdus => {
        this.pdus = JSON.parse(JSON.parse(JSON.stringify(pdus))._body);
      },
      error => console.log(error)
    );

  }

  onSelect(pdu:Pdu) {
      this.selectedPdu = pdu;
      this.router.navigate(['/update-pdu', this.selectedPdu.email]);
  }
}
