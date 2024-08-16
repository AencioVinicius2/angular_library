import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/users.interface';
import { UsersList } from '../../data/users-list';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

  onUserSelected(user: IUser) {
    console.log(user);
  }

}
