-- Create a simple test table
CREATE TABLE IF NOT EXISTS public.test_table (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.test_table ENABLE ROW LEVEL SECURITY;

-- Create a simple policy
CREATE POLICY "Allow all access"
    ON public.test_table
    FOR ALL
    USING (true);

-- Grant permissions
GRANT ALL ON public.test_table TO authenticated; 