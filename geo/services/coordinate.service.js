const { Coordinates } = require("../models/index");

const createCordinates = async (zoneId, coordinate) => {
  const response = await Coordinates.create({
    coordinate: coordinate,
    zoneId: zoneId,
  });
  return response;
};

const deleteCoordinates = async (data) => {
  const response = await Coordinates.delete({
    where: { id: data.id },
  });
  return response;
};

module.exports = { createCordinates, deleteCoordinates };
