import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    techStack: [
      {
        type: String,
      },
    ],

    repoLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    screenshot: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
mongoose.model("Project", ProjectSchema);