import { StationsMapper } from "./stations.mapper";
import { Fixtures } from "./stations.mapper.spec.fixtures";
import { UuidService } from "../uuid/uuid.service";

describe("StationsMapper", () => {
  const uuidService: UuidService = new UuidService();
  const mapper: StationsMapper = new StationsMapper(uuidService);
  const types = new Fixtures().types();

  describe("toStations", () => {
    const json = require("./stations.json");

    it("should return an array of stations", () => {
      const stations = mapper.toStations(json, types);
      expect(stations.length).toBe(5);
    });
  });

  describe("toStation", () => {
    const json = require("./station.json");

    it("should return a station with all the properties mapped", () => {
      const station = mapper.toStation(json, types);

      expect(station.name).toBe("PREMIRA ENERGIA NORTE, S.L.");
      expect(station.schedule).toBe("L-D: 24H");
      expect(station.postalCode).toBe("01240");
      expect(station.address).toBe("CL MANISITU, 9");
      expect(station.city).toBe("Alegría-Dulantzi");
      expect(station.state).toBe("ÁLAVA");
      expect(station.latitude).toBe("42,846028");
      expect(station.longitude).toBe("-2,509361");
    });
  });
});
