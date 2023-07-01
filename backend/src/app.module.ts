import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { ApiService } from './api/api.service';
import { DatabaseService } from './database/database.service';
import { UserService } from './controllers/user/user.service';
import { LogService } from './logs/log.service';
import { ErrorService } from './errors/error.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    ApiService,
    DatabaseService,
    ErrorService,
    LogService,
    UserService,
  ],
})
export class AppModule {
  constructor(private readonly dbService: DatabaseService) {}

  beforeApplicationShutdown() {
    this.dbService.closeConnection();
  }
}
