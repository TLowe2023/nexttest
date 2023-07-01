import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { DatabaseService } from 'src/database/database.service';
import { ErrorService } from 'src/errors/error.service';
import { LogService } from 'src/logs/log.service';
import { User } from './user.model';
import { getUser } from 'src/integrations/goRest/goRest.endpoints';
import { goRestUserToUser } from 'src/integrations/goRest/goRest.transformer';

@Injectable()
export class UserService {
  constructor(
    protected readonly logService: LogService,
    protected readonly errorService: ErrorService,
    protected readonly apiService: ApiService,
    protected readonly databaseService: DatabaseService,
  ) {}

  public async syncUser(id: string): Promise<User> {
    const user = await this.apiService.call(getUser(id));

    if (!user) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return await this.saveUser(goRestUserToUser(user));
  }

  public async getUser(id: string): Promise<User> {
    return await this.databaseService.getUser(id);
  }

  public async getUsers(): Promise<User[]> {
    return await this.databaseService.getUsers();
  }

  public async saveUser(user: User): Promise<User> {
    return await this.databaseService.saveUser(user);
  }
}
