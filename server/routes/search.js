import { Router } from 'express';
import Note from '../models/Note.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/search', requireAuth, async (req, res) => {
  const q = String(req.query.q || '').trim();
  if (!q) return res.json({ items: [] });
  const items = await Note.find(
    { owner: req.user.sub, $text: { $search: q } },
    { score: { $meta: 'textScore' } },
  ).sort({ score: { $meta: 'textScore' } }).limit(25);
  res.json({ items });
});

export default router;
