import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LogService } from 'src/logs/log.service';
import { HttpErrorResponse } from './errorResponse.dto';

const FALLBACK_MESSAGE = 'Unknown server error';

type Handler<T> = () => Promise<T>;
type Response<T> = Promise<T | HttpErrorResponse>;

@Injectable()
export class ErrorService {
  constructor(private readonly logService: LogService) {}

  public async respond<T>(handler: Handler<T>): Response<T> {
    try {
      return await handler();
    } catch (err) {
      this.logService.log('Error encountered', err);

      const errorResponse: HttpErrorResponse = {
        errorCode: -1,
        errorMessage: err?.message ?? `${err ?? FALLBACK_MESSAGE}`,
      };

      if (err instanceof HttpException) {
        throw err;
      }

      throw new HttpException(
        errorResponse.errorMessage,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
