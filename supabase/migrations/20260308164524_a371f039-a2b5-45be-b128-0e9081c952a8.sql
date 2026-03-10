-- Fix: Drop restrictive INSERT policy and create permissive one
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;
CREATE POLICY "Anyone can submit inquiries"
  ON public.inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Drop and recreate SELECT/DELETE as permissive too
DROP POLICY IF EXISTS "Authenticated users can read inquiries" ON public.inquiries;
CREATE POLICY "Authenticated users can read inquiries"
  ON public.inquiries FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated users can delete inquiries" ON public.inquiries;
CREATE POLICY "Authenticated users can delete inquiries"
  ON public.inquiries FOR DELETE
  TO authenticated
  USING (true);

-- Add email column
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS email text;

-- Add payment_status column
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS payment_status text NOT NULL DEFAULT 'pending';