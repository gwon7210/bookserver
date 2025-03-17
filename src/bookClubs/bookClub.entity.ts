import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { MyBookclub } from '../myBookClubs/myBookClub.entity';

@Entity()
export class BookClub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  bookTitle: string;

  @Column({ length: 50 })
  category: string;

  @Column({ length: 255, nullable: true })
  imageUrl: string;

  @Column({ default: 0 })
  memberCount: number;

  @Column({ default: 0 })
  age: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: 10 })
  maxMembers: number;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ length: 20, default: 'active' })
  status: string;

  @OneToMany(() => MyBookclub, (myBookclub) => myBookclub.bookClub)
  myBookclubs: MyBookclub[];

}