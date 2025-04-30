-- Create market_data table
CREATE TABLE public.market_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    symbol TEXT NOT NULL,
    timeframe TEXT NOT NULL,
    data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(symbol, timeframe)
);

-- Create market_analysis table
CREATE TABLE public.market_analysis (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    symbol TEXT NOT NULL,
    timeframe TEXT NOT NULL,
    analysis JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(symbol, timeframe)
);

-- Enable Row Level Security
ALTER TABLE public.market_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_analysis ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view market data"
    ON public.market_data
    FOR SELECT
    USING (true);

CREATE POLICY "Anyone can view market analysis"
    ON public.market_analysis
    FOR SELECT
    USING (true);

CREATE POLICY "Only authenticated users can update market data"
    ON public.market_data
    FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update market analysis"
    ON public.market_analysis
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE TRIGGER set_market_data_updated_at
    BEFORE UPDATE ON public.market_data
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_market_analysis_updated_at
    BEFORE UPDATE ON public.market_analysis
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Grant permissions
GRANT ALL ON public.market_data TO authenticated;
GRANT ALL ON public.market_analysis TO authenticated;

-- Refresh schema cache
NOTIFY pgrst, 'reload schema'; 