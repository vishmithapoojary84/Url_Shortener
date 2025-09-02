import mongoose from "mongoose";
import { createHash } from 'crypto';

function getGravatarUrl(email) {
  const hash = createHash('md5')
    .update(email.trim().toLowerCase())
    .digest('hex');

  return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { 
    type: String, 
    required: false,
    default: function() {
      return getGravatarUrl(this.email);
    }
  },
});

const User = mongoose.model("User", userSchema);

export default User;
