import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    course: { type: String, required: true, unique: true },
    moduleId: { type: String, required: true },
    title: { type: String, required: true },
    subsections: [
      {
        type: { type: String },
        sectionId: { type: String },
        title: { type: String },
        lessons: [
          {
            type: { type: String },
            lessonId: { type: String },
            text: { type: String },
            link: { type: String },
          },
        ],
      },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;
