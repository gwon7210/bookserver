import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MyBookclub } from '../myBookClubs/myBookClub.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string; // 암호화 필요 (다음 단계에서 적용)

  @OneToMany(() => MyBookclub, (myBookclub) => myBookclub.user, { cascade: true })
  myBookclubs: MyBookclub[];
}
