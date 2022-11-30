import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switch case';
  users = ['jenish', 'ghoghari', 'ishan', 'amit'];
  usersDetails = [
    {name: 'jenish', email: 'jenish@gmail.com', phone: '9999911111'},
    {name: 'ishan', email: 'ishan@gmail.com', phone: '9999911112'},
    {name: 'amit', email: 'amit@gmail.com', phone: '9999911113'},
    {name: 'harsh', email: 'harsh@gmail.com', phone: '9999911114'},
  ];
}
