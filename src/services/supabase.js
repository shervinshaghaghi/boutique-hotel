import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jnryffdrkqngkmjimbiu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucnlmZmRya3FuZ2ttamltYml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NDMyMzEsImV4cCI6MjAxNjQxOTIzMX0.7YtOKrXfpL4uOaCV2VK9-5aTnYj6qh436sUtsbpTQF4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
