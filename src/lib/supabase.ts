import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = import.meta.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !SUPABASE_SERVICE_KEY) {
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabaseClient = createClient(supabaseUrl, SUPABASE_SERVICE_KEY);
