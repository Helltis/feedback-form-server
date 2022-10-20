import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackPost } from '../models/post.interface';
import { FeedbackService } from '../services/feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  create(@Body() post: FeedbackPost) {
    return this.feedbackService.createPost(post);
  }
}
