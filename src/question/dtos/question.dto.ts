import { Question } from '../schemas/question.schema';

export class QuestionRandomResponseDto {
  id: number;
  questionA: string;
  questionB: string;

  static of(question: Question): QuestionRandomResponseDto {
    return {
      id: question.id,
      questionA: question.questionA,
      questionB: question.questionB,
    };
  }
}
