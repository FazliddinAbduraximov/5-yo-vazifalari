import { Injectable } from "@nestjs/common";
import { Arenda } from "./entities/arenda.entity";
import { CreateArendaInput, UpdateArendaInput } from "./dto/create-arenda.input";

@Injectable()
export class ArendaService {
  private arendalar: Arenda[] = [];
  private idseq = 1;

  create(input: CreateArendaInput): Arenda {
    const n: Arenda = {
      id: this.idseq++,
      item: input.item,
      renter: input.renter,
      startDate: input.startDate,
      endDate: input.endDate,
      pricePerDay: input.pricePerDay,
      status: "active",
    };
    this.arendalar.push(n);
    return n;
  }

  findAll(): Arenda[] {
    return this.arendalar;
  }

  findOne(id: number): Arenda | null {
    return this.arendalar.find(a => a.id === id) ?? null;
  }

  update(input: UpdateArendaInput): Arenda | null {
    const idx = this.arendalar.findIndex(a => a.id === input.id);
    if (idx === -1) return null;
    const cur = this.arendalar[idx];
    const yang = { ...cur, ...input };
    this.arendalar[idx] = yang;
    return yang;
  }

  remove(id: number): boolean {
    const len = this.arendalar.length;
    this.arendalar = this.arendalar.filter(a => a.id !== id);
    return this.arendalar.length < len;
  }
}
