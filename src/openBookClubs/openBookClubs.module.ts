import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenBookClubsService } from './openBookClubs.service';
import { OpenBookClubsController } from './openBookClubs.controller';
import { OpenBookClubsRepository } from './openBookClubs.repository';
import { OpenBookClub } from './openBookClub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OpenBookClub])],
  controllers: [OpenBookClubsController],
  providers: [OpenBookClubsService, OpenBookClubsRepository],
})
export class OpenBookClubsModule {}
