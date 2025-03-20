import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookMeeting } from './bookMeeting.entity';
import { CreateBookMeetingDto } from './dto/create-bookmeeting.dto';
import { BookClub } from '../bookClubs/bookClub.entity';

@Injectable()
export class BookMeetingsService {
  constructor(
    @InjectRepository(BookMeeting)
    private bookMeetingsRepository: Repository<BookMeeting>,
    @InjectRepository(BookClub)
    private bookClubsRepository: Repository<BookClub>,
  ) {}

  async create(createBookMeetingDto: CreateBookMeetingDto): Promise<BookMeeting> {
    // 북클럽이 존재하는지 확인
    const bookClub = await this.bookClubsRepository.findOne({
      where: { id: createBookMeetingDto.bookClubId }
    });

    if (!bookClub) {
      throw new NotFoundException(`북클럽 ID ${createBookMeetingDto.bookClubId}를 찾을 수 없습니다`);
    }

    const bookMeeting = this.bookMeetingsRepository.create({
      ...createBookMeetingDto,
      currentAttendees: 0,
    });
    
    return await this.bookMeetingsRepository.save(bookMeeting);
  }

  async findAll(): Promise<BookMeeting[]> {
    return await this.bookMeetingsRepository.find({
      relations: ['bookClub'],
    });
  }

  async findByBookClub(bookClubId: number): Promise<BookMeeting[]> {
    const bookClub = await this.bookClubsRepository.findOne({
      where: { id: bookClubId }
    });

    if (!bookClub) {
      throw new NotFoundException(`북클럽 ID ${bookClubId}를 찾을 수 없습니다`);
    }

    return await this.bookMeetingsRepository.find({
      where: { bookClubId },
      relations: ['bookClub'],
    });
  }

  async findOne(id: number): Promise<BookMeeting> {
    const bookMeeting = await this.bookMeetingsRepository.findOne({ 
      where: { id },
      relations: ['bookClub'],
    });
    
    if (!bookMeeting) {
      throw new NotFoundException(`북미팅 ID ${id}를 찾을 수 없습니다`);
    }
    
    return bookMeeting;
  }

  async update(id: number, updateData: Partial<CreateBookMeetingDto>): Promise<BookMeeting> {
    const bookMeeting = await this.findOne(id);
    
    // bookClubId가 변경되었을 경우 해당 북클럽이 존재하는지 확인
    if (updateData.bookClubId && updateData.bookClubId !== bookMeeting.bookClubId) {
      const bookClub = await this.bookClubsRepository.findOne({
        where: { id: updateData.bookClubId }
      });
      
      if (!bookClub) {
        throw new NotFoundException(`북클럽 ID ${updateData.bookClubId}를 찾을 수 없습니다`);
      }
    }
    
    Object.assign(bookMeeting, updateData);
    return await this.bookMeetingsRepository.save(bookMeeting);
  }

  async remove(id: number): Promise<void> {
    const bookMeeting = await this.findOne(id);
    await this.bookMeetingsRepository.remove(bookMeeting);
  }

  async updateAttendance(id: number, increase: boolean): Promise<BookMeeting> {
    const bookMeeting = await this.findOne(id);
    
    if (increase) {
      if (bookMeeting.currentAttendees >= bookMeeting.maxAttendees) {
        throw new BadRequestException('최대 참석 인원을 초과할 수 없습니다');
      }
      bookMeeting.currentAttendees += 1;
    } else {
      if (bookMeeting.currentAttendees <= 0) {
        throw new BadRequestException('현재 참석 인원은 0명보다 적을 수 없습니다');
      }
      bookMeeting.currentAttendees -= 1;
    }
    
    return await this.bookMeetingsRepository.save(bookMeeting);
  }
} 