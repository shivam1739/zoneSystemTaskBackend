const zoneService = require("../services/zone.service");
const coordinateService = require("../services/coordinate.service");

const createZone = async (req, res) => {
  const response = await zoneService.createZone(req.body);
  console.log(req.body);
  if (!response) {
    return res.json({
      message: "something went wrong",
      success: true,
      code: 400,
    });
  }

  req.body.coordinate.forEach(async (item) => {
    console.log(item, response.id);
    const data = await coordinateService.createCordinates(response.id, item);
    console.log(data);
  });

  return res.json({
    message: "Successfully created the zone",
    success: true,
    code: 200,
    data: response,
  });
};

const getZoneByID = async (req, res) => {
  const response = await zoneService.getZoneByID(req.params);

  console.log(response);

  return res.json({
    message: "Successfully Fetched the data",
    success: true,
    code: 200,
    data: response,
  });
};

// const deleteZoneById = async (req, res) => {
//   const response = await zoneService.deleteZoneById(req.params);
//   console.log(response);
//   return res.json({
//     message: "Successfully Delete the data",
//     success: true,
//     code: 200,
//     data: response,
//   });
// };

module.exports = { createZone, getZoneByID, deleteZoneById };
