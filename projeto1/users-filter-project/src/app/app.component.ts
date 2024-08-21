import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/users.interface';
import { IFilterOptions } from './interfaces/filter.options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersLisyByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;
  }

  filterUsersLisyByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;
    if(STATUS_NOT_SELECTED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;
    if(NAME_NOT_TYPPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }

  filterUsersByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if(DATES_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => new Date(user.dataCadastro) >= startDate && new Date(user.dataCadastro) <= endDate);
    return filteredList;
  }
}
