import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    image: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true }
  },
  { collection: "courses" }
);
export default courseSchema;
