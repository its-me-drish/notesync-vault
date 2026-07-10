import { connectDb } from '../server/db.js';
import User from '../server/models/User.js';
import Note from '../server/models/Note.js';

await connectDb();
await Note.deleteMany({});
await User.deleteMany({});

const user = await User.create({ email: 'demo@notesync-vault.dev', name: 'Demo', passwordHash: await User.hash('demo1234') });
await Note.insertMany(["Reading list","Architecture notes","Weekly review"].map((title) => ({ title, owner: user._id })));

console.log('seeded');
process.exit(0);
