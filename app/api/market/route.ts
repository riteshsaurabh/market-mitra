import { NextResponse } from 'next/server';
import { MarketService } from '@/lib/services';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');
    const timeframe = searchParams.get('timeframe') || '1d';

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol parameter is required' },
        { status: 400 }
      );
    }

    const marketData = await MarketService.getMarketData(symbol, timeframe);
    return NextResponse.json(marketData);
  } catch (error) {
    console.error('Error in market data endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { symbol, timeframe } = await request.json();

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol parameter is required' },
        { status: 400 }
      );
    }

    const analysis = await MarketService.analyzeMarketTrends(symbol, timeframe || '1d');
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error in market analysis endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 