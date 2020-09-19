import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@rajeev/my-library';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MyLibraryModule } from '@rajeev/my-library';

@Module({
  imports: [MyLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
