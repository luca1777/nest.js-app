import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    try {
      await this.connection.asPromise();
      console.log('Successfully connected to the MongoDB database.');
    } catch (error) {
      console.error('Failed to connect to the MongoDB database.', error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
