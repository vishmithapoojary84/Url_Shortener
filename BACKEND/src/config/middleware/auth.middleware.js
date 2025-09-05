import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../dao/user.dao.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = verifyToken(token);
    const user = await findUserById(decoded.id); // fetch full user
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user; // ✅ attach full user object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
