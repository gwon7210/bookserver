import { Controller, Get, Post, Body, Param, Delete, Patch, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { BookMeetingsService } from './bookMeetings.service';
import { BookMeeting } from './bookMeeting.entity';
import { CreateBookMeetingDto } from './dto/create-bookmeeting.dto';

@Controller('book-meetings')
export class BookMeetingsController {
  constructor(private readonly bookMeetingsService: BookMeetingsService) {}

  @Post()
  create(@Body() createBookMeetingDto: CreateBookMeetingDto): Promise<BookMeeting> {
    return this.bookMeetingsService.create(createBookMeetingDto);
  }

  @Get()
  findAll(@Query('bookClubId') bookClubId?: number): Promise<BookMeeting[]> {
    if (bookClubId) {
      return this.bookMeetingsService.findByBookClub(bookClubId);
    }
    return this.bookMeetingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<BookMeeting> {
    return this.bookMeetingsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<CreateBookMeetingDto>,
  ): Promise<BookMeeting> {
    return this.bookMeetingsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.bookMeetingsService.remove(id);
  }

  @Patch(':id/attendance')
  updateAttendance(
    @Param('id', ParseIntPipe) id: number,
    @Body('increase') increase: boolean,
  ): Promise<BookMeeting> {
    return this.bookMeetingsService.updateAttendance(id, increase);
  }
} 