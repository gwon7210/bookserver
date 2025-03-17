import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyBookclubsController } from './myBookClub.controller';
import { MyBookclubsService } from './myBookClub.service';
import { MyBookclub } from './myBookClub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyBookclub])],
  controllers: [MyBookclubsController],
  providers: [MyBookclubsService],
  exports: [MyBookclubsService],
})
export class MyBookclubsModule {}