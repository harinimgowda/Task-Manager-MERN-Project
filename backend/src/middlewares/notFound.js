const notFound = (req, res, next) => {
  const error = new Error("Page or resource does not exist.");
  error.status = 404;
  next(error);
};

export default notFound;
