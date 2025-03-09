import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookClubsController } from './bookClubs.controller';
import { BookClub } from './bookClub.entity';
import { BookClubsService } from './bookClubs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookClub])],
  controllers: [BookClubsController],
  providers: [BookClubsService],
})
export class BookClubsModule {} 