import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class MyLibraryService {
    ping(): string {
        throw new BadRequestException('Test');
        return 'ping';
      }
      pong(): string {
        return 'pong';
      }
}
