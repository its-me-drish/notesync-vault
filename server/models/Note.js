import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    body: { type: String, default: '' },
    tags: { type: [String], index: true },
    pinned: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
}, { timestamps: true });

export default mongoose.model('Note', noteSchema);
