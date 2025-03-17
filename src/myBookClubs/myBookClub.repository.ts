import { EntityRepository, Repository } from 'typeorm';
import { MyBookclub } from './myBookClub.entity';

@EntityRepository(MyBookclub)
export class MyBookclubsRepository extends Repository<MyBookclub> {
  async findUserBookclubs(userId: number): Promise<MyBookclub[]> {
    return this.createQueryBuilder('myBookclub')
      .leftJoinAndSelect('myBookclub.bookClub', 'bookClub')
      .where('myBookclub.user.id = :userId', { userId })
      .getMany();
  }
}