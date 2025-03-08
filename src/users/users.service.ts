import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<{ user: User; accessToken: string }> {
    const newUser = this.usersRepository.create(createUserDto);
    const savedUser = await this.usersRepository.save(newUser);
    
    // JWT 토큰 생성
    const payload = { sub: savedUser.id, phoneNumber: savedUser.phoneNumber };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      user: savedUser,
      accessToken,
    };
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return await this.usersRepository.findOne({ 
      where: { phoneNumber }
    });
  }
}
