const globalErrorHandler = (err, req, res, next) => {
  console.error(err.message);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || "Oops! Something went wrong",
    status,
  });
};

export default globalErrorHandler;
