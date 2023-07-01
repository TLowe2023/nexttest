import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/controllers/user/user.model';
import { modelToUser, userToModel } from './database.transformer';

@Injectable()
export class DatabaseService {
  private dbClient: PrismaClient = null;

  constructor() {
    this.dbClient = new PrismaClient();
  }

  public closeConnection() {
    this.dbClient.$disconnect();
  }

  public async saveUser(user: Partial<User>): Promise<User> {
    const model = await this.getUser(user.id);

    if (model) {
      return await this.updateUser(user);
    } else {
      return await this.createUser(user as User);
    }
  }

  public async createUser(user: User): Promise<User> {
    const model = await this.dbClient.user.create({
      data: userToModel(user) as any,
    });

    return modelToUser(model);
  }

  public async updateUser(user: Partial<User>): Promise<User> {
    const model = await this.dbClient.user.update({
      where: {
        id: user.id,
      },
      data: userToModel(user) as any,
    });

    return modelToUser(model);
  }

  public async getUser(id: string): Promise<User | null> {
    const model = await this.dbClient.user.findUnique({ where: { id: id } });

    return modelToUser(model);
  }

  public async getUsers(): Promise<User[]> {
    const models = await this.dbClient.user.findMany();

    return models.map((model) => modelToUser(model));
  }
}
