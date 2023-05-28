import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UserModule } from './user/user.module';

//Each modules groups related things together, each module may have a child/parent
//Use nest g module <name> to create a new module 
@Module({
  imports: [NinjasModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
