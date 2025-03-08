import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JoinedBookClub } from './joinedbookclub.entity';
import { CreateJoinedBookClubDto } from './dto/create-joinedbookclub.dto';
import { User } from '../users/user.entity';

@Injectable()
export class JoinedBookClubsService {
  constructor(
    @InjectRepository(JoinedBookClub)
    private joinedBookClubsRepository: Repository<JoinedBookClub>
  ) {}

  async create(createJoinedBookClubDto: CreateJoinedBookClubDto, user: User): Promise<JoinedBookClub> {
    const joinedBookClub = this.joinedBookClubsRepository.create({
      openBookClubId: createJoinedBookClubDto.openBookClubId
    });
    
    return this.joinedBookClubsRepository.save(joinedBookClub);
  }

  async getJoinedBookclubsByUser(user: User): Promise<JoinedBookClub[]> {
    return this.joinedBookClubsRepository.find();
  }
}
