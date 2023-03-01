import { Component, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BasketModel} from 'src/app/models/basket';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: ProductModel[] =[];
  
  //baskets:BasketModel[]=[];
  //total:number=0;
  //@Output() myEvent:EventEmitter<any>= new EventEmitter();
  constructor(private toastrService:ToastrService,
              private productService:ProductService,
              private basketService:BasketService){}
  ngOnInit():void{
    this.products = this.productService.products;
  }

  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product=product;
    basketModel.quantity=parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value="1";

    this.basketService.addBasket(basketModel);
    //this.baskets.push(basketModel);
    //this.total=this.total + (basketModel.quantity * product.price) ;
    
    //this.myEvent.emit({data:this.baskets});
    //this.toastrService.success(product.name + " sepete basariyla eklendi.");
  }
}


