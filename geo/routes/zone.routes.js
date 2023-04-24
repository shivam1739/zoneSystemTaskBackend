const zoneController = require("../controllers/zone.controller");
const coordinateController = require("../controllers/coordinates.controller");
const routes = (app) => {
  app.post("/geo/api/v1/zone", zoneController.createZone);
  app.get("/geo/api/v1/zone/:name", zoneController.getZoneByID);
  app.delete("/geo/api/v1/zone/:id", coordinateController.deleteCoordinates);
};

module.exports = routes;
