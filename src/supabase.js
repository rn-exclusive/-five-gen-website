import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://idwlqqgewvnfmgnkhzuk.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__8a2Tocpsg18ukngXj77gQ_nuGCaoNJ';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
