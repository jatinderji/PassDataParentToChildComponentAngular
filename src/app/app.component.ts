
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passing data Parent to Child Component Example';
  data = 6;
  updateChildComponent(){
    // Assigning a random number ranges 1-10
    this.data = Math.floor(Math.random()*10)+1;
  }
}
