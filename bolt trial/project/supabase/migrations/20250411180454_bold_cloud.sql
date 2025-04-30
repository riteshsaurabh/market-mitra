/*
  # Initial Schema Setup for UPSC AI Platform

  1. New Tables
    - users
      - Custom user data and preferences
    - news_articles
      - Processed news articles with metadata
    - revision_cards
      - Spaced repetition cards generated from articles
    - study_sessions
      - User study tracking and analytics
    - topics
      - UPSC syllabus topic hierarchy
    - user_progress
      - Topic-wise user progress tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table for storing additional user data
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text,
  preferred_subjects text[],
  daily_study_goal int DEFAULT 120,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- News articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  source text NOT NULL,
  url text,
  summary text,
  key_points text[],
  topics text[],
  relevance_score float DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Revision cards table
CREATE TABLE IF NOT EXISTS revision_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  article_id uuid REFERENCES news_articles(id),
  key_facts text NOT NULL,
  analysis text NOT NULL,
  topics text[],
  difficulty int DEFAULT 1,
  next_review timestamptz,
  review_count int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Study sessions table
CREATE TABLE IF NOT EXISTS study_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  topic text NOT NULL,
  duration int NOT NULL, -- in minutes
  cards_reviewed int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Topics table
CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  parent_id uuid REFERENCES topics(id),
  level int DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- User progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  topic_id uuid REFERENCES topics(id),
  proficiency float DEFAULT 0,
  last_studied timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE revision_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read their own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can read news articles"
  ON news_articles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read their revision cards"
  ON revision_cards FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create revision cards"
  ON revision_cards FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their revision cards"
  ON revision_cards FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read their study sessions"
  ON study_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create study sessions"
  ON study_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can read topics"
  ON topics FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read their progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);