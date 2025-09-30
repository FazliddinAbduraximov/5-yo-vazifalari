import { Module } from '@nestjs/common';
import { RuletkaService } from './ruletka.service';
import { RuletkaGateway } from './ruletka.gateway';

@Module({
  providers: [RuletkaGateway, RuletkaService],
})
export class RuletkaModule {}
