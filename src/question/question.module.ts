import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { QuestionRepository } from './question.repository';
import { Question } from './schemas/question.schema';
import { QuestionController } from './question.controller';
import { QuestonService } from './question.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([QuestionRepository]),
    TypeOrmModule.forFeature([Question]),
  ],
  controllers: [QuestionController],
  providers: [QuestonService],
})
export class QuestionModule {}
