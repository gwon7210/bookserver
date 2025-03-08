import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { JoinedBookClubsService } from './joinedbookclub.service';
import { CreateJoinedBookClubDto } from './dto/create-joinedbookclub.dto';
import { JoinedBookClub } from './joinedbookclub.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../users/user.entity';

@Controller('joinedbookclubs')
export class JoinedBookClubsController {
  constructor(private readonly joinedBookClubsService: JoinedBookClubsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getJoinedBookclubs(@GetUser() user: User) {
    return this.joinedBookClubsService.getJoinedBookclubsByUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createJoinedBookClub(
    @Body() createJoinedBookClubDto: CreateJoinedBookClubDto,
    @GetUser() user: User
  ): Promise<JoinedBookClub> {
    return this.joinedBookClubsService.create(createJoinedBookClubDto, user);
  }
}