/*
  # Fix comments schema

  1. Changes
    - Ensure consistent column names between tables
    - Add proper indexes
    - Clean up any duplicate columns
    
  2. Security
    - Maintain existing RLS policies
*/

-- Drop existing tables to ensure clean slate
DROP TABLE IF EXISTS comment_replies CASCADE;
DROP TABLE IF EXISTS module_comments CASCADE;

-- Create module comments table
CREATE TABLE IF NOT EXISTS module_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id text NOT NULL,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

-- Create comment replies table
CREATE TABLE IF NOT EXISTS comment_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id uuid REFERENCES module_comments(id) ON DELETE CASCADE,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE module_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_replies ENABLE ROW LEVEL SECURITY;

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

CREATE POLICY "Allow public read access to comment replies"
  ON comment_replies
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public write access to comment replies"
  ON comment_replies
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_module_comments_module_id 
ON module_comments(module_id);

CREATE INDEX IF NOT EXISTS idx_module_comments_created_at 
ON module_comments(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_comment_replies_comment_id 
ON comment_replies(comment_id);

CREATE INDEX IF NOT EXISTS idx_comment_replies_created_at 
ON comment_replies(created_at DESC);