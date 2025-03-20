import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookMeeting } from './bookMeeting.entity';

@Injectable()
export class BookMeetingsRepository {
  constructor(
    @InjectRepository(BookMeeting)
    private readonly bookMeetingRepo: Repository<BookMeeting>,
  ) {}

  async findAll(): Promise<BookMeeting[]> {
    return this.bookMeetingRepo.find({ relations: ['bookClub'] });
  }

  async findByBookClubId(bookClubId: number): Promise<BookMeeting[]> {
    return this.bookMeetingRepo.find({ 
      where: { bookClubId },
      relations: ['bookClub'] 
    });
  }

  async findOne(id: number): Promise<BookMeeting> {
    const bookMeeting = await this.bookMeetingRepo.findOne({ 
      where: { id },
      relations: ['bookClub']
    });
    
    if (!bookMeeting) {
      throw new NotFoundException(`북미팅 ID ${id}를 찾을 수 없습니다`);
    }
    
    return bookMeeting;
  }

  async createBookMeeting(data: Partial<BookMeeting>): Promise<BookMeeting> {
    const bookMeeting = this.bookMeetingRepo.create(data);
    return this.bookMeetingRepo.save(bookMeeting);
  }

  async updateBookMeeting(id: number, data: Partial<BookMeeting>): Promise<BookMeeting> {
    await this.bookMeetingRepo.update(id, data);
    return this.findOne(id);
  }

  async deleteBookMeeting(id: number): Promise<void> {
    await this.bookMeetingRepo.delete(id);
  }
} 