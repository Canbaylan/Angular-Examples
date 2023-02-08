import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app'
  krediTutari:number=10000
  vade:number=36
  aylikOdeme:number=0
  aylikFaizOrani:number = 2.1
  toplamGeriOdeme:number=0
  hesapla(){
    this.aylikOdeme = (this.krediTutari/this.vade)+
                      (this.krediTutari*this.aylikFaizOrani)/100
    this.toplamGeriOdeme = this.aylikOdeme*this.vade
  }
}
