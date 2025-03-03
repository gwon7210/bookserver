import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class OpenBookClub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  roomTitle: string;

  @Column({ length: 100 })
  bookTitle: string;

  @Column({ length: 50 })
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;
}
