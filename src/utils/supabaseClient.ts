import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL='https://xoukgtxswrzwafbljipr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvdWtndHhzd3J6d2FmYmxqaXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTYzNzksImV4cCI6MjA1OTE3MjM3OX0.TCpBnvnh_pS5juRBiDNfMB1qxbvcFRfWlIyKHdS7xw8'

export const supabase = createClient(supabaseUrl, supabaseKey);