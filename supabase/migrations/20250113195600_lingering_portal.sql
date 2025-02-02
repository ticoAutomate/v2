/*
  # Simplify comments structure
  
  1. Changes
    - Drop comment_replies table
    - Simplify module_comments table
    - Update policies
  
  2. Security
    - Maintain RLS policies for public access
*/

-- Drop the replies table
DROP TABLE IF EXISTS comment_replies CASCADE;

-- Recreate module_comments table with simplified structure
DROP TABLE IF EXISTS module_comments CASCADE;
CREATE TABLE IF NOT EXISTS module_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id text NOT NULL,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE module_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public read access to module comments"
  ON module_comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public write access to module comments"
  ON module_comments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_module_comments_module_id 
ON module_comments(module_id);

CREATE INDEX IF NOT EXISTS idx_module_comments_created_at 
ON module_comments(created_at DESC);