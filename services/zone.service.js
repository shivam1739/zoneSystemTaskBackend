const { zone } = require("../models/index");
const Sequelize = require("sequelize");
const createZone = async (data) => {
  console.log(data.geometry);
  const response = await zone.create({
    name: data.name,
    coordinates: Sequelize.fn(
      "ST_GeomFromGeoJSON",
      JSON.stringify(data.geometry)
    ),
  });

  return response;
};
const getAllZone = async () => {
  const response = await zone.findAll();

  return response;
};

const getZoneByID = async (data) => {
  const response = await zone.findOne({
    where: { id: data.id },
  });

  return response;
};

const deleteZoneById = async (data) => {
  const response = await zone.destroy({
    where: { id: data.id },
  });
  return response;
};

module.exports = { createZone, getZoneByID, deleteZoneById, getAllZone };
