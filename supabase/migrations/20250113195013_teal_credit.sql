/*
  # Fix comments schema

  1. Changes
    - Drop name column from both tables as it's redundant with author_name
    - Ensure proper column naming consistency
  
  2. Security
    - Maintain existing RLS policies
*/

-- Remove redundant name column from module_comments
ALTER TABLE module_comments 
DROP COLUMN IF EXISTS name;

-- Remove redundant name column from comment_replies
ALTER TABLE comment_replies 
DROP COLUMN IF EXISTS name;

-- Ensure proper column naming
ALTER TABLE module_comments 
RENAME COLUMN content TO content;

ALTER TABLE comment_replies 
RENAME COLUMN content TO content;

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_module_comments_created_at 
ON module_comments(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_comment_replies_created_at 
ON comment_replies(created_at DESC);