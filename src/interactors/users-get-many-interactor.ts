import { findUsers } from "../repositories/user";

interface UsersGetManyInteractorParams {
  name?: string;
}

export function usersGetManyInteractor({
  name,
}: UsersGetManyInteractorParams = {}) {
  return findUsers(name);
}
