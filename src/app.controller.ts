import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
export interface name {
  message: string;
}
@Controller('/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/signup')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getPost(): name {
    return this.appService.postService();
  }
}
