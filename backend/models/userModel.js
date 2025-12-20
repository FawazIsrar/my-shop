import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// PRE-SAVE HOOK: Password hash karne ke liye
// Note: parameter se 'next' hata diya hai kyunki async/await khud handle karta hai
userSchema.pre('save', async function () {
  // Agar password modify nahi hua (e.g. sirf name update kiya), toh skip karo
  if (!this.isModified('password')) {
    return;
  }

  // Naya salt generate karein aur password hash karein
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;