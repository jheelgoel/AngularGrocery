import { Component } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css' 
         ]
    
})
export class GroceryComponent {
    task : string = "";
    tasks : any[] = [];
    
     
    onClick(){
      
      this.tasks.push({Name: this.task});
     
      this.task = ''
    }
    faCheckSquare = faCheckSquare
    faShoppingBasket = faShoppingBasket

  }