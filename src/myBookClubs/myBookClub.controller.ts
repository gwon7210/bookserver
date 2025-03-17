import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { MyBookclubsService } from './myBookClub.service'; // Add this import

@Controller('mybookclubs')
export class MyBookclubsController {
  constructor(private readonly myBookclubsService: MyBookclubsService) {}

  @Get()
  async getMyBookclubs(@Req() req: Request) {
    return this.myBookclubsService.findUserBookclubs(1);
  }
}