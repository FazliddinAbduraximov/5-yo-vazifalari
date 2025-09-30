import { PartialType } from '@nestjs/mapped-types';
import { CreateRuletkaDto } from './create-ruletka.dto';

export class UpdateRuletkaDto extends PartialType(CreateRuletkaDto) {
  id: number;
}
