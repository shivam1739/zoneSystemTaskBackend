const coordinateService = require("../services/coordinate.service");
const coordinateService = require("../services/coordinate.service");

const deleteCoordinates = async (req, res) => {
  const response = coordinateService.deleteCoordinates(req.params);
  if (!response) {
    return res.json({
      message: "something went wrong",
      success: true,
      code: 400,
    });
  }

// await coordinateService.deleteCoordinates;

  return res.json({
    message: "Successfully Delete the data",
    success: true,
    code: 200,
    data: response,
  });
};

module.exports = { deleteCoordinates };
