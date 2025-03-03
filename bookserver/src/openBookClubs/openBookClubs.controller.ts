import { Controller, Get, Post, Body } from '@nestjs/common';
import { OpenBookClubsService } from './openBookClubs.service';
import { OpenBookClub } from './openBookClub.entity';
import { CreateOpenBookClubDto } from './dto/create-open-bookclub.dto';

@Controller('open-bookclubs')
export class OpenBookClubsController {
  constructor(private readonly openBookClubsService: OpenBookClubsService) {}

  @Get()
  async getAllOpenBookClubs(): Promise<OpenBookClub[]> {
    return this.openBookClubsService.findAll();
  }

  @Post()
  async createOpenBookClub(@Body() createOpenBookClubDto: CreateOpenBookClubDto): Promise<OpenBookClub> {
    return this.openBookClubsService.create(createOpenBookClubDto);
  }
}