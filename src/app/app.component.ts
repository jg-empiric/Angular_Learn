import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested for';
  users = [
    {name: 'jenish', email: 'jenish@gmail.com', phone: '9999911111', socialAccounts:['facebook', 'instagram', 'gmail']},
    {name: 'ishan', email: 'ishan@gmail.com', phone: '9999911112', socialAccounts:['facebook', 'instagram', 'gmail']},
    {name: 'amit', email: 'amit@gmail.com', phone: '9999911113', socialAccounts:['facebook', 'instagram', 'gmail']},
    {name: 'harsh', email: 'harsh@gmail.com', phone: '9999911114', socialAccounts:['facebook', 'instagram', 'gmail']},
  ];
}
