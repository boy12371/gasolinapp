import { Type } from "../types/types.entity";

export class Fixtures {
  types(): Array<Type> {
    const types = new Array<Type>();
    types.push(new Type("Gasoleo A", "Gasóleo A"));
    types.push(new Type("Gasoleo B", "Gasóleo B"));
    types.push(new Type("Biodiesel", "Biodiésel"));
    types.push(new Type("Gasolina 95 Protección", "Gasolina 95"));
    types.push(new Type("Gasolina  98", "Gasolina 98"));
    return types;
  }
}
