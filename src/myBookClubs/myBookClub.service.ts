import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyBookclub } from './myBookClub.entity';

@Injectable()
export class MyBookclubsService {
  constructor(
    @InjectRepository(MyBookclub)
    private readonly myBookclubsRepository: Repository<MyBookclub>,
  ) {}

  async findUserBookclubs(userId: number): Promise<MyBookclub[]> {
    const bookclubs = await this.myBookclubsRepository.find({ where: { userId } });
    console.log(bookclubs);
    return bookclubs;
  }
}