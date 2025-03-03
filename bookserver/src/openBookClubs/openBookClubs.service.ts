import { Injectable } from '@nestjs/common';
import { OpenBookClubsRepository } from './openBookClubs.repository';
import { OpenBookClub } from './openBookClub.entity';

@Injectable()
export class OpenBookClubsService {
  constructor(private readonly openBookClubsRepository: OpenBookClubsRepository) {}

  async findAll(): Promise<OpenBookClub[]> {
    return this.openBookClubsRepository.findAll();
  }

  async create(openBookClubData: Partial<OpenBookClub>): Promise<OpenBookClub> {
    return this.openBookClubsRepository.createOpenBookClub(openBookClubData);
  }
}