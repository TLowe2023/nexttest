import fetch, { RequestInit } from 'node-fetch';
import { HttpException, Injectable } from '@nestjs/common';
import { Endpoint } from './api.endpoints';

@Injectable()
export class ApiService {
  public async call<T>(endpoint: Endpoint<T>): Promise<T> {
    console.log(endpoint);

    const response = await fetch(endpoint.url, { ...endpoint } as RequestInit);

    if (!response.ok) {
      console.log(response);
      throw new HttpException(response.statusText, response.status);
    }

    return response.json() as T;
  }
}
