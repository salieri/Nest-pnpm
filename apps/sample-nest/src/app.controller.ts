import { BadRequestException, Controller, Get } from '@nestjs/common';
import { MyLibraryService } from '@rajeev/my-library';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly libService: MyLibraryService) {}
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    throw new BadRequestException('Test');
    return this.libService.ping();
  }
}
