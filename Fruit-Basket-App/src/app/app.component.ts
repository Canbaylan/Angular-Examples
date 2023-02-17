import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FruitModel } from './models/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fruit-add';
  fruit:string="";
  fruits:FruitModel[]=[];
  addStatus:boolean=true;
  
  constructor(private toastrService:ToastrService){}

  addFruit(){
    this.addStatus=true;
    this.fruits.forEach(el => {
       if(el.name == this.fruit){
        this.addStatus= false;
        this.fruit="";
       } 
    });
    if(this.addStatus)
    {
      let fruit = new FruitModel();
      fruit.name=this.fruit;
      fruit.date=Date();
      this.fruits.push(fruit);
      this.fruit="";
      this.toastrService.success("Meyve Eklendi.","Basarili")
    }
  }
  deleteFruit(event:any){
      let fruit:FruitModel=event.data;
      let index:number=this.fruits.indexOf(fruit);
      this.fruits.splice(index,1);
      this.toastrService.info(fruit.name + " silindi.")
  }
}

