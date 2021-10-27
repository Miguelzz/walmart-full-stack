import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { appConfig } from './config/configuration';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig] }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/scheme.gql'),
      installSubscriptionHandlers: true,
      context: (req) => ({ headers: req.headers }),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/walmart'),
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
