// export const cookieOptions = {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "lax",
//   maxAge: 1000 * 60 * 5 // 5 minutes
// };
export const cookieOptions = {
  httpOnly: true,
  secure: false, // disable secure for local dev on HTTP
  sameSite: 'lax',
  maxAge: 1000 * 60 * 5 // 5 minutes
};