import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

interface SupabaseContext {
  session: any;
  user: any;
}

export const SupabaseContext = React.createContext<SupabaseContext>({
  session: null,
  user: null,
});

export default function App({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SupabaseContext.Provider value={{ session, user }}>
      <Component {...pageProps} />
    </SupabaseContext.Provider>
  );
}
