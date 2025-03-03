import { Injectable } from '@nestjs/common';
import { BookClubsRepository } from './bookclubs.repository';
import { BookClub } from './bookclub.entity';

@Injectable()
export class BookClubsService {
  constructor(private readonly bookClubsRepository: BookClubsRepository) {}

  async findAll(): Promise<BookClub[]> {
    return this.bookClubsRepository.findAll();
  }

  async create(bookClubData: Partial<BookClub>): Promise<BookClub> {
    return this.bookClubsRepository.createBookClub(bookClubData);
  }
}
