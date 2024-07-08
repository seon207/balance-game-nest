import { Field } from 'src/field/schemas/field.schema';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Field, { eager: true })
  @JoinColumn()
  field: Field;

  @Column()
  questionA: string;

  @Column()
  questionB: string;

  @Column({ default: 0 })
  a: number;

  @Column({ default: 0 })
  b: number;
}
