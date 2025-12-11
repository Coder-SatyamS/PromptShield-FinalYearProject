 import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    prompt: { type: String, required: true },
    result: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Prompt", PromptSchema);
