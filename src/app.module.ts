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
      host: 'ec2-34-248-169-69.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'fegbemiukdcyzy',
      password:
        '979a2b15e7e584fced9f26e1048c25beff66fff70e99c080ef36c9ce5cbc4407',
      database: 'ddfv95datf03f0',
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
