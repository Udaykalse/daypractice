const fs = require("fs");
const path = require("path");

function errorHandler(err, req, res, next) {
  const errorLogPath = path.join(__dirname, "../../logs/error.log");

  const errorMessage = `
[${new Date().toISOString()}]
${req.method} ${req.originalUrl}
${err.stack}
-------------------------
`;

  fs.appendFileSync(errorLogPath, errorMessage);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;