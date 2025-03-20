import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BookClub } from '../bookClubs/bookClub.entity';

@Entity()
export class BookMeeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'datetime' })
  meetingDate: Date;

  @Column({ default: 0 })
  currentAttendees: number;

  @Column()
  maxAttendees: number;

  @Column({ length: 255, nullable: true })
  location: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ length: 20, default: 'scheduled' })
  status: string; // scheduled, in-progress, completed, cancelled

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => BookClub, (bookClub) => bookClub.bookMeetings)
  @JoinColumn({ name: 'bookClubId' })
  bookClub: BookClub;

  @Column()
  bookClubId: number;
} 