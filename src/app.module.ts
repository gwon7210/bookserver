import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profiles/profile.module';
import { BookClubsModule } from './bookClubs/bookClubs.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // .env 파일 로드
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306'),
      username: process.env.DB_USERNAME ?? 'bookandyou',
      password: process.env.DB_PASSWORD ?? '1212',
      database: process.env.DB_DATABASE ?? 'bookandyou',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 환경에서만 true로 설정
      dropSchema: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key', // 실제 환경에서는 환경변수로 관리해야 합니다
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    UsersModule,
    ProfileModule,
    BookClubsModule,
  ],
})
export class AppModule {}
