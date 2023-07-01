import { User } from "./dtos";
import { Endpoint } from "./rest.service";

const HOST_NAME = "http://localhost:3000/api";

function getDefault<T>(path: string): Endpoint<T> {
  return {
    method: "GET",
    url: `${HOST_NAME}${path}`,
  } as Endpoint<T>;
}

export function getUsers(): Endpoint<User[]> {
  return {
    ...getDefault("/users"),
    method: "GET",
  } as Endpoint<User[]>;
}

export function getUser(id: string): Endpoint<User> {
  return {
    ...getDefault(`/user/${id}`),
    method: "GET",
  } as Endpoint<User>;
}
