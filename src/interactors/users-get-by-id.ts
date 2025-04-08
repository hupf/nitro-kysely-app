import { findUserById } from "../repositories/user";

interface UsersGetByIdInteractorParams {
  id: number;
}

export function usersGetByIdInteractor({ id }: UsersGetByIdInteractorParams) {
  return findUserById(id);
}
