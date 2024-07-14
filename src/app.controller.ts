import { Controller, Get, Post   } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
export interface name {
  message: string;
}
class CreateCatDto {
  name: string;
  age: number;
}
@ApiTags("Auth")
@Controller('/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('/signup')
  @ApiOperation({summary:"Signup for the student"})
  @ApiResponse({status:200})
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post()
  @ApiOperation({ summary: 'Create a new cat' })
  @ApiBody({ type: CreateCatDto })
  @ApiResponse({ status: 201, description: 'The cat has been successfully created.' })
  getPost(): name {
    return this.appService.postService();
  }
}
