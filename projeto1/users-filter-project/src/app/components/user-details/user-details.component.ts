import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/users.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = { } as IUser;
}
