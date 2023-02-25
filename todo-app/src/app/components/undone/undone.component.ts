import { Component, Input } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent {
  @Input() unDoneModels:UnDoneModel[];
  @Input() doneModels:DoneModel[];

  deleteUnDone(unDoneModel:any){
    let index = this.unDoneModels.indexOf(unDoneModel);
    this.unDoneModels.splice(index,1);
  }

  completeUnDone(doneModel:any){
    this.doneModels.push(doneModel);
    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index,1);
  }
}
