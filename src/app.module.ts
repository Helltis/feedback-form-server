import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    FeedbackModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://feedback-form-app-main-db-02261aaa19bc2764e:ZxvVWzv8BdJXBpjcHt76Nw8y8e5svB@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/feedback-form-app-main-db-02261aaa19bc2764e',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
