import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookClub } from './bookClub.entity';

@Injectable()
export class BookClubsRepository {
  constructor(
    @InjectRepository(BookClub)
    private readonly bookClubRepo: Repository<BookClub>,
  ) {}

  async findAll(): Promise<BookClub[]> {
    return this.bookClubRepo.find();
  }

  async createBookClub(data: Partial<BookClub>): Promise<BookClub> {
    const bookClub = this.bookClubRepo.create(data);
    return this.bookClubRepo.save(bookClub);
  }
} 