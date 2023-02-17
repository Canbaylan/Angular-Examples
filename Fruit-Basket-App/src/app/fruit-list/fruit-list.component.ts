import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FruitModel } from '../models/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {
  @Input()  fruits:FruitModel[]; //componentler arası tasima(parent-child)
  @Output() myEvent:EventEmitter<any>=new EventEmitter();

  constructor(private toastrService:ToastrService){}
  deleteItem(item:FruitModel){
    // let index:number=this.fruits.indexOf(item);
    // this.fruits.splice(index,1);
    // this.toastrService.info(item.name + " silindi.");
    this.myEvent.emit({data: item});
  }
}
