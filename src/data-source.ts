import { DataSource } from 'typeorm';
import { MyBookclub } from './myBookClubs/myBookClub.entity';
import { BookClub } from './bookClubs/bookClub.entity';
import { User } from './users/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'bookandyou',
  password: '1212',
  database: 'bookandyou',
  entities: [MyBookclub, BookClub, User],
  synchronize: true,
});