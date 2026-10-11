-- ==============================================================================
-- Bit & Bot Admin Authentication Table Schema
-- Run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/vstwkgvjvnztkmdscqny/sql
-- ==============================================================================

-- 1. Create the `admins` table with required columns
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'super_admin',
  avatar_url TEXT,
  "isLoggined" BOOLEAN DEFAULT false,
  is_loggined BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  "updatedAt" TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  last_login_at TIMESTAMPTZ
);

-- 2. Enable Row Level Security
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies to allow login and session tracking
DROP POLICY IF EXISTS "Allow select for admin authentication" ON public.admins;
CREATE POLICY "Allow select for admin authentication"
  ON public.admins
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow update for admin session tracking" ON public.admins;
CREATE POLICY "Allow update for admin session tracking"
  ON public.admins
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- 4. Seed initial default Administrator credentials
INSERT INTO public.admins (name, email, password, role, "isLoggined", is_loggined)
VALUES (
  'Bit & Bot Admin',
  'msafvankv786@gmail.com',
  'admin@123',
  'super_admin',
  false,
  false
)
ON CONFLICT (email) DO UPDATE 
SET 
  name = EXCLUDED.name,
  password = EXCLUDED.password;

-- 5. Optional: Ensure `enquiries` table has SELECT, UPDATE and DELETE policies for Admin
ALTER TABLE IF EXISTS public.enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on enquiries" ON public.enquiries;
CREATE POLICY "Allow public insert on enquiries"
  ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin select on enquiries" ON public.enquiries;
CREATE POLICY "Allow admin select on enquiries"
  ON public.enquiries
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow admin update on enquiries" ON public.enquiries;
CREATE POLICY "Allow admin update on enquiries"
  ON public.enquiries
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin delete on enquiries" ON public.enquiries;
CREATE POLICY "Allow admin delete on enquiries"
  ON public.enquiries
  FOR DELETE
  USING (true);
