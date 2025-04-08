import { findUserById } from "../repositories/user-repository";

interface UsersGetByIdInteractorParams {
  id: number;
}

export function usersGetByIdInteractor({ id }: UsersGetByIdInteractorParams) {
  return findUserById(id);
}
