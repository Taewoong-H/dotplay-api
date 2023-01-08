import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CustomRepository } from 'src/util/decorators/custom-repository.decorator';
import { CreateUserDto } from '../dto/create-user.dto';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { email, password, nickname, phoneNumber } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      email,
      password: hashedPassword,
      nickname,
      phoneNumber,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

// ToDo: custom-repository 생성
// Issue: EntityRepository가 새로운 typeorm에서 제공을 안함..
