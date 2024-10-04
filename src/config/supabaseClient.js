import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sfsfgqvuvbeqdjnewgpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmc2ZncXZ1dmJlcWRqbmV3Z3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwMDk1MjUsImV4cCI6MjA0MzU4NTUyNX0.0Ij54nnkLzIPpApgQzkB6nUKTpDy5IAoWkmOTY2wb_U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
