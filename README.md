# NoteSync Vault

Markdown note vault with tags, full-text search and offline-first sync.

## Stack
- Node.js + Express REST API
- MongoDB + Mongoose
- React 18 + Vite client
- JWT auth, Zod validation, Jest + Supertest

## Getting started

```bash
npm install
cp .env.example .env
npm run seed
npm run dev        # API on :4000
npm run dev:client # client on :5173
```

## API

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | /api/auth/signup | Create an account |
| POST | /api/auth/login | Exchange credentials for a JWT |
| GET | /api/notes | List notes (paginated, searchable) |
| POST | /api/notes | Create a note |
| PATCH | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |
| GET | /api/notes/search?q= | Full-text search across notes |

## Testing

```bash
npm test
```

## License

MIT
