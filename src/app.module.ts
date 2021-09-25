import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { KeyData } from './schemata/key_data.schema';
import { KeyRequestHistory } from './schemata/key_request_history.schema';
@Module({
  imports: [
    SequelizeModule.forRoot({
      database: process.env.DB_DATABASE,
      dialect: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      timezone: '+09:00',
      logging: process.env.DEBUG == 'yes',
      pool: {
        max: 2,
        min: 1,
        idle: 2
      },
      models: [KeyData, KeyRequestHistory]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
