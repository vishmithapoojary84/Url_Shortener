import mongoose from "mongoose";
import { createHash } from 'crypto';
import bcrypt from "bcrypt";
function getGravatarUrl(email) {
  const hash = createHash('md5')
    .update(email.trim().toLowerCase())
    .digest('hex');

  return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true,select:false },
  avatar: { 
    type: String, 
    required: false,
    default: function() {
      return getGravatarUrl(this.email);
    }
  },
});
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});
userSchema.pre("save", async function(next) {
  if(!this.isModified("password"))return next();
this.password=await bcrypt.hash(this.password,10);
next();
});

const User = mongoose.model("User", userSchema);

export default User;
