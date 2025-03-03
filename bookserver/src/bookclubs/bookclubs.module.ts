import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookClubsService } from './bookclubs.service';
import { BookClubsController } from './bookclubs.controller';
import { BookClubsRepository } from './bookclubs.repository';
import { BookClub } from './bookclub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookClub])],
  controllers: [BookClubsController],
  providers: [BookClubsService, BookClubsRepository],
})
export class BookClubsModule {}
