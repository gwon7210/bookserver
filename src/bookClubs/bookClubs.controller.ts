import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateBookClubDto } from './dto/create-bookclub.dto';
import { BookClub } from './bookClub.entity';
import { BookClubsService } from './bookClubs.service';

@Controller('book-clubs')
export class BookClubsController {
  constructor(private readonly bookClubsService: BookClubsService) {}

  @Post()
  create(@Body() createBookClubDto: CreateBookClubDto): Promise<BookClub> {
    return this.bookClubsService.create(createBookClubDto);
  }

  @Get()
  findAll(): Promise<BookClub[]> {
    return this.bookClubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<BookClub> {
    return this.bookClubsService.findOne(id);
  }
} 