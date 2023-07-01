import { HttpError } from "./http.error";

export interface Endpoint<T> {
  url: string;
  method: string;
  body?: T | null;
}

export async function call<T>(endpoint: Endpoint<T>): Promise<T> {
  const response = await fetch(endpoint.url, { ...((endpoint ?? {}) as any) });

  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }

  return response.json() as T;
}
