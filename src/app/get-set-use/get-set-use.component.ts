import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-set-use',
  templateUrl: './get-set-use.component.html',
  styleUrls: ['./get-set-use.component.css']
})
export class GetSetUseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input get name():string { return this._name; }
   set name(name: string) {
     this._name = (name && name.trim()) || '<no name set>';
   }
  private _name="";

}
