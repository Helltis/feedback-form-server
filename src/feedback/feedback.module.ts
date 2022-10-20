import { Module } from '@nestjs/common';
import { FeedbackService } from './services/feedback.service';
import { FeedbackController } from './controllers/feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackPostEntity])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
