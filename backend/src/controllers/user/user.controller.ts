import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { ErrorService } from 'src/errors/error.service';

@Controller()
export class UserController {
  constructor(
    protected readonly errorService: ErrorService,
    private readonly userService: UserService,
  ) {}

  @Get('/user/:id')
  public async getUser(@Param('id') id: string) {
    return await this.errorService.respond<User>(async () => {
      return this.userService.getUser(id);
    });
  }

  @Get('/users')
  public async getUsers() {
    return await this.errorService.respond<User[]>(async () => {
      return this.userService.getUsers();
    });
  }

  @Post('/user')
  public async postUser(@Body() user: User) {
    return await this.errorService.respond<User>(async () => {
      return this.userService.saveUser(user);
    });
  }

  @Put('/user/:id')
  public async putUser(@Param('id') id: string, @Body() user: Partial<User>) {
    return await this.errorService.respond<User>(async () => {
      return this.userService.saveUser({ ...user, id: id } as User);
    });
  }

  @Post('/user/:id/sync')
  public async syncUser(@Param('id') id: string) {
    return await this.errorService.respond<User>(async () => {
      return this.userService.syncUser(id);
    });
  }
}
