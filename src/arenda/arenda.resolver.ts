import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ArendaService } from "./arenda.service";
import { Arenda } from "./entities/arenda.entity";
import { CreateArendaInput, UpdateArendaInput } from "./dto/arenda.dto";

@Resolver(() => Arenda)
export class ArendaResolver {
  constructor(private readonly service: ArendaService) {}

  @Query(() => [Arenda])
  arendalar(): Arenda[] {
    return this.service.findAll();
  }

  @Query(() => Arenda, { nullable: true })
  arenda(@Args("id", { type: () => Int }) id: number): Arenda | null {
    return this.service.findOne(id);
  }

  @Mutation(() => Arenda)
  createArenda(@Args("input") input: CreateArendaInput): Arenda {
    return this.service.create(input);
  }

  @Mutation(() => Arenda, { nullable: true })
  updateArenda(@Args("input") input: UpdateArendaInput): Arenda | null {
    return this.service.update(input);
  }

  @Mutation(() => Boolean)
  removeArenda(@Args("id", { type: () => Int }) id: number): boolean {
    return this.service.remove(id);
  }
}
