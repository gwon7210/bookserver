// src/bookclubs/bookclubs.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookClub } from './bookclub.entity';

@Injectable()
export class BookClubsRepository {
  constructor(
    @InjectRepository(BookClub)
    private readonly bookClubRepo: Repository<BookClub>,
  ) {}

  async createBookClub(data: Partial<BookClub>): Promise<BookClub> {
    const bookClub = this.bookClubRepo.create(data);
    return this.bookClubRepo.save(bookClub);
  }

  async findAll(): Promise<BookClub[]> {
    return this.bookClubRepo.find();
  }
}
