import { Component, Input } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent {
@Input() doneModels:DoneModel[];
@Input() unDoneModels:UnDoneModel[];

changeDoneItem(doneModel:any){
  this.unDoneModels.push(doneModel);
  let index = this.doneModels.indexOf(doneModel);
  this.doneModels.splice(index,1);

}
}
