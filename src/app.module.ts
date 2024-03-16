import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as express from 'express';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const app = express();
    app.use(cors());
    consumer.apply(app).forRoutes('*');
  }
}
