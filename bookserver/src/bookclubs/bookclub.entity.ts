import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class BookClub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nickname: string;

  @Column({ length: 100 })
  bookTitle: string;

  @Column('text')
  introduction: string;

  @CreateDateColumn()
  createdAt: Date;
}