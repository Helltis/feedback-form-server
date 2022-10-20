import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeedbackPostEntity } from '../models/post.entity';
import { FeedbackPost } from '../models/post.interface';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackPostEntity)
    private readonly feedbackPostRepository: Repository<FeedbackPostEntity>,
  ) {}

  createPost(feedbackPost: FeedbackPost) {
    return this.feedbackPostRepository.save(feedbackPost);
  }
}
