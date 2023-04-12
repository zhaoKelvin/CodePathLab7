import { createClient } from '@supabase/supabase-js'


const URL = 'https://dsyehehhqfefhszyptzy.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeWVoZWhocWZlZmhzenlwdHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY0MDcsImV4cCI6MTk5NjIzMjQwN30.xEiv-qsr_D0TsxeWFJ6YL6wntX2ebqfMCGtfMdPn6g0'

export const supabase = createClient(URL, API_KEY);