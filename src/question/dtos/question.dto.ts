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

export class QuestionRatioRequestDto {
  questionIds: number[];
}

export class QuestionRatioResponseDto {
  id: number;
  questionA: string;
  questionB: string;
  ratioA: number;
  ratioB: number;

  static of(
    question: Question,
    ratioA: number,
    ratioB: number,
  ): QuestionRatioResponseDto {
    return {
      id: question.id,
      questionA: question.questionA,
      questionB: question.questionB,
      ratioA: ratioA,
      ratioB: ratioB,
    };
  }
}
