// Supabase configuration
export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL ?? '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
} as const;

export const isSupabaseConfigured = 
  Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);