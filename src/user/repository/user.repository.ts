import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

export type UserCustomRepository = typeof UserCustomRepository;
export const UserCustomRepository = {
  async findByEmail(email: string): Promise<User> {
    return this.findOne({});
  },
};
// ToDo: custom-repository 생성
// Issue: EntityRepository가 새로운 typeorm에서 제공을 안함..
