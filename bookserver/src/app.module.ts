import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ProfileModule } from './profiles/profile.module';
import { Profile } from './profiles/profile.entity';
import { BookClubsModule } from './bookclubs/bookclubs.module';
import { BookClub } from './bookclubs/bookclub.entity';
import { OpenBookClubsModule } from './openBookClubs/openBookClubs.module';
import { OpenBookClub } from './openBookClubs/openBookClub.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // .env 파일 로드
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Profile, BookClub, OpenBookClub], // 엔티티 연결
      synchronize: true, // 개발 중 자동 테이블 생성
    }),
    UsersModule, // 사용자 모듈 추가
    ProfileModule,
    BookClubsModule,
    OpenBookClubsModule,
  ],
})
export class AppModule {}
