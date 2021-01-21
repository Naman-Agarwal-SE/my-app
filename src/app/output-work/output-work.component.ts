import { Component, OnInit, Output, Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-work',
  templateUrl: './output-work.component.html',
  styleUrls: ['./output-work.component.css']
})
export class OutputWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()name!:string;
  @Output() voted =new EventEmitter<boolean>();
  didvote=false;

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didvote =true;
  }
}
