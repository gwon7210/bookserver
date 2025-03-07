import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinedBookClubsService } from './joinedbookclub.service';
import { JoinedBookClubsController } from './joinedbookclub.controller';
import { JoinedBookClubsRepository } from './joinedbookclub.repository';
import { JoinedBookClub } from './joinedbookclub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JoinedBookClub])],
  controllers: [JoinedBookClubsController],
  providers: [JoinedBookClubsService, JoinedBookClubsRepository],
})
export class JoinedBookClubsModule {}
