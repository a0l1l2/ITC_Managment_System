
import { createClient } from '@supabase/supabase-js'

export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z3ZncmN0emZsdHhzYW9zeWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2OTgxNzIsImV4cCI6MjAzMDI3NDE3Mn0.xkj4Lq5KWtoEVz81wPhJ-CiDukaoUtAHAeFhHQPawzU';
export const API_URL = 'https://mzgvgrctzfltxsaosyih.supabase.co';

export const supabase = createClient(API_URL, API_KEY)

