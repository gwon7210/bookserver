import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateBookClubDto } from './dto/create-bookclub.dto';
import { BookClub } from './bookClub.entity';
import { BookClubsService } from './bookClubs.service';
import { Auth } from '../auth/auth.decorator';

@Controller('book-clubs')
export class BookClubsController {
  constructor(private readonly bookClubsService: BookClubsService) {}

  @Auth()
  @Post()
  create(@Body() createBookClubDto: CreateBookClubDto): Promise<BookClub> {
    return this.bookClubsService.create(createBookClubDto);
  }

  @Auth()
  @Get()
  findAll(): Promise<BookClub[]> {
    return this.bookClubsService.findAll();
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<BookClub> {
    return this.bookClubsService.findOne(id);
  }
} 