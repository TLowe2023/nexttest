export interface Endpoint<T> {
  url: string;
  method: string;
  body?: T | null | undefined;
}
