import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  displayVal:string = '';
  getValue(val:string) {
    // console.log(val);
    this.displayVal=val
  }

}
