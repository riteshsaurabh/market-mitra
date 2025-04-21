-- Add first_name and last_name columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT;

-- Update the trigger function to handle first_name and last_name
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, first_name, last_name)
  VALUES (new.id, new.email, '', '');  -- Initialize with empty strings

  INSERT INTO public.user_preferences (user_id)
  VALUES (new.id);

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Refresh Supabase schema cache
NOTIFY pgrst, 'reload schema'; 