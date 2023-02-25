import { Component } from '@angular/core';
import { UnDoneModel } from '../../models/unDoneModel';
import { DoneModel } from '../../models/doneModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  unDoneModels:UnDoneModel[]=[];
  doneModels:DoneModel[]=[];
  
  constructor(){console.log("constructor calisti");}
  ngOnInit():void{console.log("ngOnInit calisti"); }
  ngOnChanges(){console.log("ngChanges calisti"); }
  ngDoCheck(){console.log("ngDoCheck calisti"); }
  ngAfterViewInit(){console.log("ngAfterViewInit calisti"); }
  ngAfterViewChecked(){console.log("ngAfterViewChecked calisti"); }
  ngOnDestroy(){console.log("ngOnDestroy calisti"); }
}
