import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Registration-Form';
  email:string="";
  password:string="";
  check:boolean=false;
  button:boolean=false;
  checkAvaible(){
    if(this.email != "" && this.password !="" && this.check){
        this.button=true;
    }
    else{
      this.button=false;
    }
    
  }
  changeClass(value:string){
    if(value !=""){
      return "form-control success-validation";
    }
    else{
      return "form-control error-validation";
    }
  }
}
