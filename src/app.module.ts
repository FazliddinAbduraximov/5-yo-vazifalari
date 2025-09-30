import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuletkaModule } from './ruletka/ruletka.module';

@Module({
  imports: [RuletkaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
