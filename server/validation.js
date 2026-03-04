import { z } from 'zod';

export const noteSchema = z.object({
  title: z.string().min(1).max(200),
  body: z.string().max(50_000).default(''),
  tags: z.array(z.string().max(32)).max(20).default([]),
});

export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(422).json({ error: parsed.error.issues });
  req.body = parsed.data;
  next();
};
