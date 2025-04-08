import { findUsers } from "../repositories/user-repository";

interface UsersGetManyInteractorParams {
  name?: string;
}

export function usersGetManyInteractor({
  name,
}: UsersGetManyInteractorParams = {}) {
  return findUsers(name);
}
