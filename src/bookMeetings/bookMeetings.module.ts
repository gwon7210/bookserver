import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookMeetingsController } from './bookMeetings.controller';
import { BookMeetingsService } from './bookMeetings.service';
import { BookMeeting } from './bookMeeting.entity';
import { BookClubsModule } from '../bookClubs/bookClubs.module';
import { BookClub } from '../bookClubs/bookClub.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookMeeting, BookClub]),
    BookClubsModule
  ],
  controllers: [BookMeetingsController],
  providers: [BookMeetingsService],
  exports: [BookMeetingsService]
})
export class BookMeetingsModule {} 