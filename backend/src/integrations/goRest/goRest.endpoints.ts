import { Endpoint } from 'src/api/api.endpoints';
import { GoRestUser } from './goRest.types';

const HOST_NAME = 'https://gorest.co.in/public/v2';
const AUTH_TOKEN = process.env.AUTH_TOKEN;

function getDefault<T>(path: string): Endpoint<T> {
  return {
    method: 'GET',
    url: `${HOST_NAME}${path}`,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  } as Endpoint<T>;
}

export function getUsers(): Endpoint<GoRestUser[]> {
  return {
    ...getDefault('/users'),
    method: 'GET',
  } as Endpoint<GoRestUser[]>;
}

export function getUser(id: string): Endpoint<GoRestUser> {
  return {
    ...getDefault(`/users/${id}`),
    method: 'GET',
  } as Endpoint<GoRestUser>;
}
