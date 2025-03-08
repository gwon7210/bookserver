// src/bookclubs/bookclubs.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JoinedBookClub } from './joinedbookclub.entity';

@Injectable()
export class JoinedBookClubsRepository {
  constructor(
    @InjectRepository(JoinedBookClub)
    private readonly joinedBookClubRepo: Repository<JoinedBookClub>,
  ) {}

  async createJoinedBookClub(data: Partial<JoinedBookClub>): Promise<JoinedBookClub> {
    const joinedBookClub = this.joinedBookClubRepo.create(data);
    return this.joinedBookClubRepo.save(joinedBookClub);
  }

  async findAll(): Promise<JoinedBookClub[]> {
    return this.joinedBookClubRepo.find();
  }
}
