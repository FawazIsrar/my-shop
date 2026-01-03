const notfound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  // Map common Mongoose / auth errors to appropriate HTTP statuses
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    res.status(400);
  } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    res.status(401);
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  const payload = {
    name: err.name,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  };

  // Include validation error details when available
  if (err.name === 'ValidationError' && err.errors) {
    payload.errors = Object.keys(err.errors).reduce((acc, key) => {
      acc[key] = err.errors[key].message;
      return acc;
    }, {});
  }

  // Include cast error metadata
  if (err.name === 'CastError') {
    payload.path = err.path;
    payload.value = err.value;
  }

  // Standardized shape for client consumption
  res.json({
    error: payload,
  });
};
export { notfound, errorHandler };