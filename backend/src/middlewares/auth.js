import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    const err = new Error("Unauthorized:Token missing");
    err.statusCode = 401;
    return next(err);
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; //user id role exp
    next();
  } catch{
    const err = new Error("Unauthorized:Invalid token");
    err.statusCode = 401;
    next(err);
  }
};
