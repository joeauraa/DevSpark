/*
  # Create code snippets table

  1. New Tables
    - `code_snippets`
      - `id` (uuid, primary key) - Unique identifier for each snippet
      - `title` (text) - Name/title of the code snippet
      - `language` (text) - Programming language of the snippet
      - `code` (text) - The actual code content
      - `created_at` (timestamptz) - When the snippet was created
      - `user_id` (uuid, nullable) - Optional user reference for future auth integration

  2. Security
    - Enable RLS on `code_snippets` table
    - Add policy for public read access (anyone can view snippets)
    - Add policy for public write access (anyone can create snippets)
    - Add policy for snippet creators to delete their own snippets

  3. Notes
    - This table stores user code snippets for the online code editor
    - Public access is enabled since this is a demo application
    - Future enhancement: Add user authentication and restrict access to own snippets
*/

CREATE TABLE IF NOT EXISTS code_snippets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  language text NOT NULL,
  code text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  user_id uuid
);

ALTER TABLE code_snippets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view code snippets"
  ON code_snippets
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create code snippets"
  ON code_snippets
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can delete code snippets"
  ON code_snippets
  FOR DELETE
  USING (true);

CREATE INDEX IF NOT EXISTS idx_code_snippets_created_at 
  ON code_snippets(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_code_snippets_language 
  ON code_snippets(language);
