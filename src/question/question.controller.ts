import { Body, Controller, Get, Query } from '@nestjs/common';
import { QuestonService } from './question.service';
import {
  QuestionRandomResponseDto,
  QuestionRatioRequestDto,
  QuestionRatioResponseDto,
} from './dtos/question.dto';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestonService) {}

  @Get()
  getRandomQuestions(
    @Query('fieldId') fieldId: number,
  ): Promise<QuestionRandomResponseDto[]> {
    return this.questionService.getRandomQuestions(fieldId);
  }

  @Get('/result')
  getQuestionRatio(
    @Body() questionRatioRequestDto: QuestionRatioRequestDto,
  ): Promise<QuestionRatioResponseDto[]> {
    return this.questionService.getQuestionRatio(questionRatioRequestDto);
  }
}
