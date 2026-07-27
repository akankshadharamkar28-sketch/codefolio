import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
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

    bio: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    socialLinks: {
      github: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },
    },

   skills:[
  {
    type:String
  }
],
    templateId: {
      type: String,
      default: "minimal",
    },

    isPro: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);


export default mongoose.models.User ||
mongoose.model("User", UserSchema);