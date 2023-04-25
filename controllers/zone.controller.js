const zoneService = require("../services/zone.service");

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

  return res.json({
    message: "Successfully created the zone",
    success: true,
    code: 200,
    data: response,
  });
};
const getAllZone = async (req, res) => {
  const response = await zoneService.getAllZone();
  if (!response) {
    return res.json({
      message: "no zone found",
      success: true,
      code: 200,
    });
  } else {
    return res.json({
      message: "Successfully Fetched the data",
      success: true,
      code: 200,
      data: response,
    });
  }
};

const getZoneByID = async (req, res) => {
  const response = await zoneService.getZoneByID(req.params);

  return res.json({
    message: "Successfully Fetched the data",
    success: true,
    code: 200,
    data: response,
  });
};

const deleteZoneById = async (req, res) => {
  const response = await zoneService.deleteZoneById(req.params);

  return res.json({
    message: "Successfully Delete the data",
    success: true,
    code: 200,
    data: response,
  });
};

module.exports = { createZone, deleteZoneById, getZoneByID, getAllZone };
