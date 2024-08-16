import { Component } from '@angular/core';
import { IUser } from './interfaces/user/users.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = UsersList[0];
}
