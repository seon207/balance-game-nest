import { Field } from 'src/field/schemas/field.schema';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Field, (field) => field.questions, { eager: true })
  fieldId: number;

  @Column()
  questionA: string;

  @Column()
  questionB: string;

  @Column()
  a: number;

  @Column()
  b: number;
}
