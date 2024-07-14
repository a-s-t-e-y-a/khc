import { Injectable } from '@nestjs/common';
import { name } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postService(): name {
    return {
      message: 'new error',
    };
  }
}
