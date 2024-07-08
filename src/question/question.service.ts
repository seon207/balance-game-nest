import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { QuestionRandomResponseDto } from './dtos/question.dto';

@Injectable()
export class QuestonService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getRandomQuestions(
    fieldId: number,
  ): Promise<QuestionRandomResponseDto[]> {
    // fieldId에 맞는 전체 질문 리스트 가져오기
    const questions = await this.questionRepository.findBy({
      field: { id: fieldId },
    });

    // 질문들의 question_id로 이루어진 정수 리스트에서 랜덤으로 10개 추출
    const questionIds: number[] = questions.map((question) => question.id);
    const randomIds: number[] = this.getRandomNumbers(questionIds, 10);

    // question_id가 랜덤 정수 리스트에 속하는 질문만 가져오기
    const randomQuestions =
      await this.questionRepository.getQuestionsById(randomIds);

    const randomQuestionResult = randomQuestions.map((randomQuestion) => {
      return QuestionRandomResponseDto.of(randomQuestion);
    });

    return randomQuestionResult;
  }

  getRandomNumbers = (arr: number[], n: number): number[] => {
    if (n > arr.length) {
      throw new BadRequestException(`전체 질문 개수가 ${n}개 미만입니다.`);
    }

    // 복사본 생성
    const shuffled = arr.slice();

    // 배열을 무작위로 섞음
    shuffled.sort(() => Math.random() - 0.5);

    // 앞에서부터 n개의 요소를 선택하여 반환
    return shuffled.slice(0, n);
  };
}
