import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateArendaInput {
  @Field()
  item: string;

  @Field()
  renter: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => Int)
  pricePerDay: number;
}

@InputType()
export class UpdateArendaInput {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  item?: string;

  @Field({ nullable: true })
  renter?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field(type => Int, { nullable: true })
  pricePerDay?: number;

  @Field({ nullable: true })
  status?: string;
}
