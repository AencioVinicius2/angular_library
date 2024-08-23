import { IUser } from "../interfaces/user/users.interface";
import { IFilterOptions } from "../interfaces/filter.options.interface";

const filterUsersLisyByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;
  if(STATUS_NOT_SELECTED) {
    return usersList;
  }
  const filteredList = usersList.filter((user) => user.ativo === status);
  return filteredList;
}

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;
  if(NAME_NOT_TYPPED) {
    return usersList;
  }
  const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
  return filteredList;
}

const filterUsersByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
  if(DATES_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => new Date(user.dataCadastro) >= startDate && new Date(user.dataCadastro) <= endDate);
  return filteredList;
}

export const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersLisyByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
  return filteredList;
}
