export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;
    if (!role) {
      const err = new Error("Forbiden:role not found");
      err.statusCode = 403;
      return next(err);
    }
    if (!allowedRoles.includes(role)) {
      const err = new Error("Forbiden:Insufficient access");
      err.statusCode = 403;
      return next(err);
    }
    next();
  };
};
