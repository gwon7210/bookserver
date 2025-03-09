import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookClub } from './bookClub.entity';
import { CreateBookClubDto } from './dto/create-bookclub.dto';

@Injectable()
export class BookClubsService {
  constructor(
    @InjectRepository(BookClub)
    private bookClubsRepository: Repository<BookClub>,
  ) {}

  async create(createBookClubDto: CreateBookClubDto): Promise<BookClub> {
    const bookClub = this.bookClubsRepository.create({
      ...createBookClubDto,
      memberCount: 0,
      status: 'active',
    });
    return await this.bookClubsRepository.save(bookClub);
  }

  async findAll(): Promise<BookClub[]> {
    return await this.bookClubsRepository.find();
  }

  async findOne(id: number): Promise<BookClub> {
    const bookClub = await this.bookClubsRepository.findOne({ where: { id } });
    if (!bookClub) {
      throw new NotFoundException(`북클럽 ID ${id}를 찾을 수 없습니다`);
    }
    return bookClub;
  }
} 