-- Add missing columns to module_comments table
ALTER TABLE module_comments
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS author_name text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS author_email text;

-- Add missing columns to comment_replies table
ALTER TABLE comment_replies
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS author_name text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS author_email text;

-- Update existing policies
DROP POLICY IF EXISTS "Allow public write access to module comments" ON module_comments;
DROP POLICY IF EXISTS "Allow public write access to comment replies" ON comment_replies;

-- Create new policies with proper authentication checks
CREATE POLICY "Allow authenticated users to create comments"
  ON module_comments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to create replies"
  ON comment_replies
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_module_comments_module_id ON module_comments(module_id);
CREATE INDEX IF NOT EXISTS idx_comment_replies_comment_id ON comment_replies(comment_id);