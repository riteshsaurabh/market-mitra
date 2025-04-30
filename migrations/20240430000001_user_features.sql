-- Create watchlist table
CREATE TABLE public.watchlist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    timeframe TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, symbol, timeframe)
);

-- Create alerts table
CREATE TABLE public.alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    condition_type TEXT NOT NULL,
    condition_value NUMERIC NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analysis_preferences table
CREATE TABLE public.analysis_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    indicators JSONB NOT NULL DEFAULT '{
        "rsi": {"enabled": true, "period": 14},
        "macd": {"enabled": true, "fast": 12, "slow": 26, "signal": 9},
        "movingAverages": {"enabled": true, "sma20": true, "sma50": true, "sma200": true}
    }'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE public.watchlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analysis_preferences ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can manage their own watchlist"
    ON public.watchlist
    FOR ALL
    USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own alerts"
    ON public.alerts
    FOR ALL
    USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own analysis preferences"
    ON public.analysis_preferences
    FOR ALL
    USING (auth.uid() = user_id);

-- Create updated_at triggers
CREATE TRIGGER set_watchlist_updated_at
    BEFORE UPDATE ON public.watchlist
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_alerts_updated_at
    BEFORE UPDATE ON public.alerts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_analysis_preferences_updated_at
    BEFORE UPDATE ON public.analysis_preferences
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Grant permissions
GRANT ALL ON public.watchlist TO authenticated;
GRANT ALL ON public.alerts TO authenticated;
GRANT ALL ON public.analysis_preferences TO authenticated;

-- Refresh schema cache
NOTIFY pgrst, 'reload schema'; 