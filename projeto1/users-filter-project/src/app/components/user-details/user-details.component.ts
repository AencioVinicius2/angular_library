import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/users.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  showUserDetail(user: IUser) {

  }
}
