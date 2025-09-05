import { verifyToken } from '../utils/helper.js'; 
export const authMiddleware = async (req, res, next) => {
  console.log('Cookies:', req.cookies);
  const token = req.cookies.accessToken;
  console.log('Token:', token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded);
    req.user ={ _id: decoded.id };
   console.log("User set in req:", req.user); 
    next();
  } catch (error) {
    console.log('JWT verify error:', error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
