import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookClubsService } from './bookclubs.service';
import { CreateBookClubDto } from './dto/create-bookclub.dto';
import { BookClub } from './bookclub.entity';

@Controller('bookclubs')
export class BookClubsController {
  constructor(private readonly bookClubsService: BookClubsService) {}

  @Get()
  async getAllBookClubs(): Promise<BookClub[]> {
    return this.bookClubsService.findAll();
  }

  @Post()
  async createBookClub(@Body() createBookClubDto: CreateBookClubDto): Promise<BookClub> {
    return this.bookClubsService.create(createBookClubDto);
  }
}