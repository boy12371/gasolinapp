import { Injectable } from "@nestjs/common";
let v5 = require("uuid/v5");

@Injectable()
export class UuidService {
  private readonly NAMESPACE = "a6edc906-2f9f-5fb2-a373-efac406f0ef2";

  create(seed: string) {
    return v5(seed, this.NAMESPACE);
  }
}
