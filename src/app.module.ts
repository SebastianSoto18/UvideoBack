import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {join} from 'path'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
            ConfigModule.forRoot({
              envFilePath: `.dev.env`,
              isGlobal: true
            }),
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory:(configService: ConfigService) =>{
                const uri = configService.get('DB_URI');
                return {
                  uri,
                }
              },
            }),
            GraphQLModule.forRoot<ApolloDriverConfig>({
              driver:ApolloDriver,
              autoSchemaFile: join( process.cwd() ,'src/schema.gql'),
              sortSchema: true,
            }),
            UsersModule,
            AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
