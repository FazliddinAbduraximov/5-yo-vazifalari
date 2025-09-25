import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Arenda {
  @Field(type => Int)
  id: number;

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

  @Field()
  status: string;
}
