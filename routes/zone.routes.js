const zoneController = require("../controllers/zone.controller");
const routes = (app) => {
  app.post("/geo/api/v1/zone", zoneController.createZone);
  app.get("/geo/api/v1/zone/:name", zoneController.getZoneByID);
  app.get("/geo/api/v1/zone", zoneController.getAllZone);
  app.delete("/geo/api/v1/zone/:id", zoneController.deleteZoneById);
};

module.exports = routes;
