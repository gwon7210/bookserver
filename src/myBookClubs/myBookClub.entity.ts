import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { BookClub } from '../bookClubs/bookClub.entity';

@Entity()
export class MyBookclub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;
  
  @ManyToOne(() => User, (user) => user.myBookclubs, { eager: true, onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => BookClub, (bookClub) => bookClub.myBookclubs, { eager: true, onDelete: 'CASCADE' })
  bookClub: BookClub;
  
  @CreateDateColumn()
  joinedAt: Date;

  @Column()
  meetingDate: Date; // Add this line
}