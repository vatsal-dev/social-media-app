import jwt from "jsonwebtoken";


export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    // If no token is provided in the header, return a "403 Forbidden" response
    if (!token) {
      return res.status(403).send("Access Denied");
    }


    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
