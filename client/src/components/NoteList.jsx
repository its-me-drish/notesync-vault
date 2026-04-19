import { useEffect, useState } from 'react';
import { api } from '../api.js';

export default function NoteList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/notes').then((data) => setItems(data.items ?? data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading notes…</p>;
  if (!items.length) return <p>No notes yet.</p>;

  return (
    <ul className="note-list">
      {items.map((item) => (
        <li key={item._id}>
          <strong>{item.title}</strong>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
}
