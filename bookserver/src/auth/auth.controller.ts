import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    try {
      const user: User = await this.authService.validateUser(loginDto.phoneNumber, loginDto.password);
      return this.authService.login(user);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
