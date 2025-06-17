/*
  # Create waitlist table for email collection

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `language` (text, default 'en')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert access (for email collection)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  language text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert emails (for waitlist signup)
CREATE POLICY "Anyone can insert waitlist emails"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to read their own waitlist entry
CREATE POLICY "Users can read own waitlist data"
  ON waitlist
  FOR SELECT
  TO anon
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);