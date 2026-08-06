const KEY = 'notesync:pending';

const read = () => JSON.parse(localStorage.getItem(KEY) || '[]');
const write = (queue) => localStorage.setItem(KEY, JSON.stringify(queue));

export function enqueue(op) {
  write([...read(), { ...op, queuedAt: Date.now() }]);
}

export async function flush(api) {
  const queue = read();
  const failed = [];
  for (const op of queue) {
    try {
      await api[op.method](op.path, op.body);
    } catch {
      failed.push(op);
    }
  }
  write(failed);
  return { sent: queue.length - failed.length, pending: failed.length };
}
