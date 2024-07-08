import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Question } from './schemas/question.schema';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {
  async getQuestionsById(ids: number[]): Promise<Question[]> {
    return await this.createQueryBuilder('question')
      .where('question.id IN (:...ids)', { ids })
      .orderBy(`FIELD(question.id, ${ids.join(',')})`)
      .getMany();
  }
}
