import { DataSource } from 'typeorm';
import { BookClub } from './bookClubs/bookClub.entity';
import { User } from './users/user.entity';
import { BookMeeting } from './bookMeetings/bookMeeting.entity';
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'bookandyou',
  password: '1212',
  database: 'bookandyou',
  entities: [BookClub, User, BookMeeting],
  synchronize: true,
});