/*
  # Add comments tables
  
  1. New Tables
    - `module_comments`
      - `id` (uuid, primary key)
      - `module_id` (text)
      - `name` (text)
      - `content` (text)
      - `created_at` (timestamp)
    - `comment_replies`
      - `id` (uuid, primary key) 
      - `comment_id` (uuid, references module_comments)
      - `name` (text)
      - `content` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access to read/write comments
*/

-- Create module comments table
CREATE TABLE IF NOT EXISTS module_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id text NOT NULL,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create comment replies table
CREATE TABLE IF NOT EXISTS comment_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id uuid REFERENCES module_comments(id) ON DELETE CASCADE,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
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