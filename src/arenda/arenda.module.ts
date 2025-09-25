import { Module } from "@nestjs/common";
import { ArendaService } from "./arenda.service";
import { ArendaResolver} from "./arenda.resolver";

@Module({
  providers: [ArendaService, ArendaResolver],
})
export class ArendaModule {}
