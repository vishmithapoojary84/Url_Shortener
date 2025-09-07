export const cookieOptions = {
  httpOnly: true,
  secure: true,          // must be true on HTTPS
  sameSite: 'None',      // allows cross-site requests
  maxAge: 1000 * 60 * 5  // 5 minutes
};
