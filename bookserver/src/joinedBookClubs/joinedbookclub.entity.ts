import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class JoinedBookClub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openBookClubId: number;

  @CreateDateColumn()
  joinedAt: Date;
}