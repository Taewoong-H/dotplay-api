import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
}
