const { Zone, Coordinates } = require("../models/index");

const createZone = async (data) => {
  const response = await Zone.create({
    name: data.name,
  });
  return response;
};

const getZoneByID = async (data) => {
  const response = await Zone.findOne({
    where: { name: data.name },
    include: Coordinates,
  });
  console.log(response);
  return response;
};

const deleteZoneById = async (data) => {
  console.log("===========================", data);
  const response = await Zone.destroy({
    where: { id: data.id },
  });
  console.log(response, "response==========================================");
  return response;
};



module.exports = { createZone, getZoneByID, deleteZoneById };
