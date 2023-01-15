import { Board } from 'src/board/entities/board.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  phoneNumber: string;

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  useYn: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
