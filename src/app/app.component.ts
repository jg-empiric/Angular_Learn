import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested for';
  color = 'red';
  bgColor = 'green';
  updateColor() {
    this.color = "blue"
    this.bgColor = 'red'
  }
}
