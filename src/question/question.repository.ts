import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Question } from './schemas/question.schema';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {}
