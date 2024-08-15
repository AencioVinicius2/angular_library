import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/users.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

}
