import { Controller, Get, Query } from '@nestjs/common';
import { QuestonService } from './question.service';
import { QuestionRandomResponseDto } from './dtos/question.dto';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestonService) {}

  @Get()
  getRandomQuestions(
    @Query('fieldId') fieldId: number,
  ): Promise<QuestionRandomResponseDto[]> {
    return this.questionService.getRandomQuestions(fieldId);
  }
}
