/*
  # Fix duplicate policies for course_progress table

  1. Changes
    - Drop existing policies for course_progress table
    - Recreate policies with correct names to avoid duplicates

  2. Security
    - Maintains same security rules as before
    - Ensures proper RLS policies for course_progress table
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can update own course progress" ON course_progress;

-- Recreate policies with unique names
CREATE POLICY "Users can insert own course progress"
  ON course_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can modify own course progress"
  ON course_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);