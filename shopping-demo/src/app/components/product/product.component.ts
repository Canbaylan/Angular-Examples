import { Component, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BasketModel} from 'src/app/models/basket';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: ProductModel[] = [
    { name: "Peynir", price: 119.99, imageUrl: "https://www.peynircibaba.com/image/catalog/urunler/1008.jpg" },
    { name: "Domates", price: 12.99, imageUrl: "https://images.migrosone.com/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg" },
    { name: "Zeytin", price: 69.99, imageUrl: "https://i0.wp.com/www.forazeytin.com.tr/blog/wp-content/uploads/2021/06/FORA_18_Bilgi-2.png?resize=800%2C490" },
    { name: "Salatalik", price: 18.99, imageUrl: "https://st2.myideasoft.com/idea/ad/25/myassets/products/972/salatalik-kg-746444.jpg?revision=1569508255" },
    { name: "Domates1", price: 12.99, imageUrl: "https://images.migrosone.com/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg" },
    { name: "Peynir1", price: 119.99, imageUrl: "https://www.peynircibaba.com/image/catalog/urunler/1008.jpg" },
    { name: "Salatalik1", price: 18.99, imageUrl: "https://st2.myideasoft.com/idea/ad/25/myassets/products/972/salatalik-kg-746444.jpg?revision=1569508255" },
    { name: "Domates2", price: 12.99, imageUrl: "https://images.migrosone.com/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg" },
    { name: "Peynir2", price: 119.99, imageUrl: "https://www.peynircibaba.com/image/catalog/urunler/1008.jpg" },
    { name: "Salatalik2", price: 18.99, imageUrl: "https://st2.myideasoft.com/idea/ad/25/myassets/products/972/salatalik-kg-746444.jpg?revision=1569508255" },
    { name: "Domates3", price: 12.99, imageUrl: "https://images.migrosone.com/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg" },
    { name: "Type-C Sarj Cihazi", price: 399.99, imageUrl: "data:image/jpeg;base64,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" },
    { name: "Tasarim Desenleri ve Mimarileri", price: 79.99, imageUrl: "https://productimages.hepsiburada.net/s/8/375/8797951098930.jpg" }
  ]
  baskets:BasketModel[]=[];
  total:number=0;
  @Output() myEvent:EventEmitter<any>= new EventEmitter();
  constructor(private toastrService:ToastrService){}

  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product=product;
    basketModel.quantity=parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value="1";
    this.baskets.push(basketModel);
    //this.total=this.total + (basketModel.quantity * product.price) ;
    
    this.myEvent.emit({data:this.baskets});
    this.toastrService.success(product.name + " sepete basariyla eklendi.");
  }
}


