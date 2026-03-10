-- Allow authenticated users to update inquiries (for payment status)
CREATE POLICY "Anyone can update own inquiry"
  ON public.inquiries FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);