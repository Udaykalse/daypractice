const attempts = {};

function rateLimit(req, res, next) {
  const ip = req.ip;

  if (!attempts[ip]) {
    attempts[ip] = { count: 1, lastAttempt: Date.now() };
    return next();
  }

  attempts[ip].count++;

  if (attempts[ip].count > 5) {
    const error = new Error("Too many requests. Try again later.");
    error.status = 429;
    return next(error);
  }

  next();
}

module.exports = rateLimit;