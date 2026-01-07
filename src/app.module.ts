import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [usersModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
