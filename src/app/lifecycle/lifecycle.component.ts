import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit{

  constructor() { }
  welc:string ='';
  ngOnInit(): void {
    this.showname("naman agarwal");
    this.welc='welcome naman agarwal by ngOnInit'
  }
  changeval(){
    this.welc ="welcome mr. agarwal by onchanges";
  }

  showname(name:string){
     console.log(`welcome ${name}`);
  }
}
