import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['ryan', 'joe', 'cameron'];

  sayHello() {
    alert('A la mierda el desarrollo web!');
  }
}
