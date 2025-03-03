import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.profileRepository.createProfile(createProfileDto);
  }
}
