import { Injectable } from '@nestjs/common';
import { CreateRuletkaDto } from './dto/create-ruletka.dto';
import { UpdateRuletkaDto } from './dto/update-ruletka.dto';

@Injectable()
export class RuletkaService {
  create(createRuletkaDto: CreateRuletkaDto) {
    return 'This action adds a new ruletka';
  }

  findAll() {
    return `This action returns all ruletka`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruletka`;
  }

  update(id: number, updateRuletkaDto: UpdateRuletkaDto) {
    return `This action updates a #${id} ruletka`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruletka`;
  }
}
