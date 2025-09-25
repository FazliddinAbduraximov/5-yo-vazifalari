import { CreateArendaInput } from './create-arenda.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArendaInput extends PartialType(CreateArendaInput) {
  @Field(() => Int)
  id: number;
}
