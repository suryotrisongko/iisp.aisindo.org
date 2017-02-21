import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Specialization} from '../models/specialization';

import {Myconfig} from '../shared/myconfig';


@Injectable()
export class SpecializationService {

  constructor (private http:Http){}

  getSpecializations() {
    let url = Myconfig.SERVICE_HOME_URL + "/specialization/all"; //ok
    return this.http.get(url);
  }

  getSpecializationById (id: number) {
    let url = Myconfig.SERVICE_HOME_URL + "/specialization/detail?id="+id; //ok
    return this.http.get(url);
  }

}
