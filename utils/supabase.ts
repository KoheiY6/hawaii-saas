import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabase;
}

export async function getCurrentUser() {
  const client = getSupabaseClient();
  const { data: { user }, error } = await client.auth.getUser();
  return { user, error };
}

export async function signOut() {
  const client = getSupabaseClient();
  return await client.auth.signOut();
}
