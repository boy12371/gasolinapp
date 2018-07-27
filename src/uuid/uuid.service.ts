import * as UUID from "uuid/v5";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UuidService {
  readonly NAMESPACE = "gasolinapp";

  create(seed: string) {
    return UUID(seed, this.NAMESPACE);
  }
}
