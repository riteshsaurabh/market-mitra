-- Add role column to profiles table with a default value
ALTER TABLE public.profiles
ADD COLUMN role TEXT DEFAULT 'user';

-- Update the trigger function to handle role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, first_name, last_name, role)
  VALUES (new.id, new.email, '', '', 'user');  -- Initialize with empty strings and default role

  INSERT INTO public.user_preferences (user_id)
  VALUES (new.id);

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Refresh Supabase schema cache
NOTIFY pgrst, 'reload schema'; 