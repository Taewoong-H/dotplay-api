import { User } from 'src/user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  dot: string; // JSON.stringify(arr)로 저장, JSON.parse(data)로 배열 사용

  @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  useYn: string;

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
