import { Injectable } from '@angular/core';
import { LoggerService } from '../logger.service';
@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private logger : LoggerService) { }
  heroname :string[] = ['naman', 'ranu' ,'gunna','siddhu'];
  gethero(){
    this.logger.log("getting the heros");
    return this.heroname;
  }
}
