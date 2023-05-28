import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';

//nest g controller <name> and nest g service <name> to create a controller and service for that module
@Module({
  controllers: [NinjasController],
  providers: [NinjasService],
})
export class NinjasModule {}
