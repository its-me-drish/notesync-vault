import { useState } from 'react';
import { api } from '../api.js';

export default function NoteForm({ onCreated }) {
  const [title, setNoteTitle] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const created = await api.post('/notes', { title });
      onCreated?.(created);
      setNoteTitle('');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="note-form">
      <input value={title} onChange={(e) => setNoteTitle(e.target.value)} placeholder="New note" />
      <button disabled={busy || !title.trim()}>Add</button>
    </form>
  );
}
