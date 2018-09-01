import uuidv5 from "uuid/v5";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UuidService {
  private readonly NAMESPACE = "a6edc906-2f9f-5fb2-a373-efac406f0ef2";

  create(seed: string) {
    return uuidv5(seed, this.NAMESPACE);
  }
}
