import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUndoneComponent {
  @Input() unDoneModels:UnDoneModel[];
  unDoneInput:string = "";
  @ViewChild("addInput") addInp:ElementRef;
  //@ContentChild("addInput") addInput:any;

  addUnDoneItem(addInput:HTMLInputElement){
    //console.log(<HTMLInputElement>document.getElementById("input"));
    console.log(this.addInp.nativeElement.value);
    let unDoneModel = new UnDoneModel();
    unDoneModel.title = addInput.value;
    unDoneModel.date = Date();
    this.unDoneModels.push(unDoneModel);
    addInput.value="";
  }
  constructor(){console.log("constructor calisti");}
  ngOnInit():void{console.log("ngOnInit calisti"); }
  ngOnChanges(){console.log("ngChanges calisti"); }
  ngDoCheck(){console.log("ngDoCheck calisti"); }
  ngAfterViewInit(){console.log("ngAfterViewInit calisti"); }
  ngAfterViewChecked(){console.log("ngAfterViewChecked calisti"); }
  ngOnDestroy(){console.log("ngOnDestroy calisti"); }
}
