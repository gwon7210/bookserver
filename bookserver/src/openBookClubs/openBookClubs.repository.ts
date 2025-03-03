import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OpenBookClub } from './openBookClub.entity';

@Injectable()
export class OpenBookClubsRepository {
  constructor(
    @InjectRepository(OpenBookClub)
    private readonly openBookClubRepo: Repository<OpenBookClub>,
  ) {}

  async findAll(): Promise<OpenBookClub[]> {
    return this.openBookClubRepo.find();
  }

  async createOpenBookClub(data: Partial<OpenBookClub>): Promise<OpenBookClub> {
    const openBookClub = this.openBookClubRepo.create(data);
    return this.openBookClubRepo.save(openBookClub);
  }
}