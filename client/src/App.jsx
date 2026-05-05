import { useState } from 'react';
import { AuthProvider, useAuth } from './AuthContext.jsx';
import LoginForm from './components/LoginForm.jsx';
import NoteList from './components/NoteList.jsx';
import NoteForm from './components/NoteForm.jsx';

function Shell() {
  const { token, logout } = useAuth();
  const [version, setVersion] = useState(0);

  if (!token) return <LoginForm />;

  return (
    <main className="shell">
      <header>
        <h1>NoteSync Vault</h1>
        <button onClick={logout}>Sign out</button>
      </header>
      <NoteForm onCreated={() => setVersion((v) => v + 1)} />
      <NoteList key={version} />
    </main>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
