import { Component, OnInit, Input, OnChanges ,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange-work',
  templateUrl: './onchange-work.component.html',
  styleUrls: ['./onchange-work.component.css']
})
export class OnchangeWorkComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  major!: number;
  @Input()
  minor!: number;
  changelog : string[]=[];

  ngOnChanges(changes:SimpleChanges){
    const log: string[] = [];
    console.log(changes);
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      console.log(to);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
      console.log(log);
    }
    this.changelog.push(log.join(', '));
  }
}
