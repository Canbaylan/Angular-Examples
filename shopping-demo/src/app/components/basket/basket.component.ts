import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  @Input() baskets: BasketModel[] = [];
  @Input() total: number;

  constructor(private toastrService: ToastrService) { }

  deleteProduct(basket: BasketModel) {
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    this.toastrService.info(basket.product.name + ' urunu silindi.');
    this.total = this.total - (basket.product.price * basket.quantity);
  }

  calc() {
    this.total=0;
    this.baskets.forEach(el => {
      this.total = this.total + el.product.price * el.quantity;
    });
    return this.total;
  }
  changeData(basket:BasketModel){
    let quantity:number = parseInt((<HTMLInputElement>document.getElementById("basketquantity-"+basket.product.name)).value);
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    basket.quantity = quantity;
    this.baskets.push(basket);
  }
  payment(event:any){
    if(this.total == event.total){
      let count= this.baskets.length;
      this.baskets.splice(0,count);
      this.toastrService.info("Odeme Basarili.");
    }
  }
}
