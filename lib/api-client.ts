/**
 * FinInsights AI - API Client
 *
 * This file provides a centralized client for making API requests to the backend.
 * It handles authentication, error handling, and provides typed methods for each API endpoint.
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getFinancialData(ticker: string) {
  const { data, error } = await supabase
    .from('financial_data')
    .select('*')
    .eq('ticker', ticker)
    .single()

  if (error) {
    console.error('Error fetching financial data:', error)
    throw error
  }

  return data
}

export async function getCompanyInfo(ticker: string) {
  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .eq('ticker', ticker)
    .single()

  if (error) {
    console.error('Error fetching company info:', error)
    throw error
  }

  return data
}

export async function getIndustryData(industry: string) {
  const { data, error } = await supabase
    .from('industry_data')
    .select('*')
    .eq('industry', industry)
    .single()

  if (error) {
    console.error('Error fetching industry data:', error)
    throw error
  }

  return data
}

/**
 * Base API configuration
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

/**
 * API request options interface
 */
interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Record<string, string>
  body?: any
  cache?: RequestCache
}

/**
 * API response interface
 */
interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: number
}

/**
 * Makes an API request with proper error handling and authentication
 *
 * @param endpoint - API endpoint path
 * @param options - Request options
 * @returns Promise with typed response data
 *
 * @example
 * ```typescript
 * const { data, error } = await apiRequest<User>('/users/profile');
 * if (data) {
 *   // Use the typed user data
 *   console.log(data.name);
 * }
 * ```
 */
async function apiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
  try {
    // Prepare request headers
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    // Add authentication token if available
    const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    // Prepare request body
    const body = options.body ? JSON.stringify(options.body) : undefined

    // Make the request
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: options.method || "GET",
      headers,
      body,
      cache: options.cache,
    })

    // Parse the response
    let data = null
    try {
      data = await response.json()
    } catch (e) {
      // Response might not contain JSON
    }

    // Handle error responses
    if (!response.ok) {
      return {
        data: null,
        error: data?.message || `API error: ${response.status}`,
        status: response.status,
      }
    }

    // Return successful response
    return {
      data,
      error: null,
      status: response.status,
    }
  } catch (error) {
    console.error("API request failed:", error)
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      status: 500,
    }
  }
}

/**
 * Stock data interface
 */
export interface StockData {
  ticker: string
  name: string
  price: number
  change: number
  changePercent: number
  marketCap: string
  pe: number
  historicalData: { date: string; price: number }[]
}

/**
 * Financial insight interface
 */
export interface FinancialInsight {
  insightId: string
  ticker: string
  summary: string
  ratios: Record<string, number>
  recommendations: { type: string; text: string }[]
}

/**
 * User profile interface
 */
export interface UserProfile {
  id: string
  name: string
  email: string
  userType: string
  createdAt: string
  preferences: {
    theme: "light" | "dark" | "system"
    notifications: boolean
  }
}

/**
 * Document interface
 */
export interface Document {
  documentId: string
  filename: string
  uploadedAt: string
  status: "processing" | "completed" | "failed"
}

/**
 * System status interface
 */
export interface SystemStatus {
  status: "operational" | "degraded" | "outage"
  lastUpdated: string
  services: {
    name: string
    status: "operational" | "degraded" | "outage"
    responseTime: number
  }[]
  incidents: {
    id: string
    title: string
    status: "investigating" | "identified" | "monitoring" | "resolved"
    createdAt: string
    updatedAt: string
  }[]
}

/**
 * Route status interface
 */
export interface RouteStatus {
  path: string
  status: "success" | "error"
  loadTime: number
  lastChecked: string
  error?: string
}

/**
 * API client with typed methods for each endpoint
 */
const apiClient = {
  /**
   * Authentication methods
   */
  auth: {
    /**
     * Login a user
     *
     * @param email - User email
     * @param password - User password
     * @returns Promise with login response
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.auth.login('user@example.com', 'password123');
     * if (data) {
     *   // User logged in successfully
     *   localStorage.setItem('auth_token', data.token);
     * }
     * ```
     */
    login: async (email: string, password: string) => {
      return apiRequest<{ token: string; user: UserProfile }>("/auth/login", {
        method: "POST",
        body: { email, password },
      })
    },

    /**
     * Register a new user
     *
     * @param userData - User registration data
     * @returns Promise with registration response
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.auth.register({
     *   name: 'John Doe',
     *   email: 'john@example.com',
     *   password: 'password123',
     *   userType: 'trader'
     * });
     * ```
     */
    register: async (userData: {
      name: string
      email: string
      password: string
      userType: string
    }) => {
      return apiRequest<{ success: boolean; user: UserProfile }>("/auth/register", {
        method: "POST",
        body: userData,
      })
    },

    /**
     * Logout the current user
     *
     * @returns Promise with logout response
     *
     * @example
     * ```typescript
     * await apiClient.auth.logout();
     * localStorage.removeItem('auth_token');
     * ```
     */
    logout: async () => {
      return apiRequest<{ success: boolean }>("/auth/logout", {
        method: "POST",
      })
    },
  },

  /**
   * Stock data methods
   */
  stocks: {
    /**
     * Get stock data for a ticker
     *
     * @param ticker - Stock ticker symbol
     * @param period - Time period for data
     * @returns Promise with stock data
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.stocks.getStockData('AAPL', '1y');
     * if (data) {
     *   // Use stock data
     *   console.log(`Current price: ${data.price}`);
     * }
     * ```
     */
    getStockData: async (ticker: string, period = "1m") => {
      return apiRequest<StockData>(`/stocks/${ticker}?period=${period}`)
    },
  },

  /**
   * Financial insights methods
   */
  insights: {
    /**
     * Generate insights for a stock or document
     *
     * @param params - Parameters for insight generation
     * @returns Promise with generated insights
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.insights.generate({
     *   ticker: 'AAPL',
     *   analysisType: 'full'
     * });
     * ```
     */
    generate: async (params: {
      ticker?: string
      documentIds?: string[]
      analysisType: "basic" | "full"
    }) => {
      return apiRequest<FinancialInsight>("/insights/generate", {
        method: "POST",
        body: params,
      })
    },

    /**
     * Get previously generated insights
     *
     * @param insightId - ID of the insight to retrieve
     * @returns Promise with insight data
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.insights.getInsight('insight_123');
     * ```
     */
    getInsight: async (insightId: string) => {
      return apiRequest<FinancialInsight>(`/insights/${insightId}`)
    },
  },

  /**
   * User management methods
   */
  users: {
    /**
     * Get the current user's profile
     *
     * @returns Promise with user profile data
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.users.getProfile();
     * if (data) {
     *   // Use user profile data
     *   console.log(`Welcome, ${data.name}!`);
     * }
     * ```
     */
    getProfile: async () => {
      return apiRequest<UserProfile>("/users/profile")
    },

    /**
     * Update user profile
     *
     * @param profileData - Updated profile data
     * @returns Promise with updated profile
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.users.updateProfile({
     *   name: 'John Smith',
     *   preferences: { theme: 'dark' }
     * });
     * ```
     */
    updateProfile: async (profileData: Partial<UserProfile>) => {
      return apiRequest<UserProfile>("/users/profile", {
        method: "PUT",
        body: profileData,
      })
    },
  },

  /**
   * Document processing methods
   */
  documents: {
    /**
     * Upload a document for analysis
     *
     * @param formData - Form data with file and metadata
     * @returns Promise with uploaded document info
     *
     * @example
     * ```typescript
     * const formData = new FormData();
     * formData.append('file', fileInput.files[0]);
     * formData.append('documentType', 'earnings');
     *
     * const { data, error } = await apiClient.documents.upload(formData);
     * ```
     */
    upload: async (formData: FormData) => {
      return apiRequest<Document>("/documents/upload", {
        method: "POST",
        headers: {
          // Don't set Content-Type here, it will be set automatically with boundary
        },
        body: formData,
      })
    },

    /**
     * Get document status
     *
     * @param documentId - ID of the document
     * @returns Promise with document status
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.documents.getStatus('doc_123');
     * ```
     */
    getStatus: async (documentId: string) => {
      return apiRequest<Document>(`/documents/${documentId}/status`)
    },
  },

  /**
   * System status methods
   */
  status: {
    /**
     * Get system status
     *
     * @returns Promise with system status
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.status.getSystemStatus();
     * if (data) {
     *   console.log(`System status: ${data.status}`);
     * }
     * ```
     */
    getSystemStatus: async () => {
      return apiRequest<SystemStatus>("/status")
    },

    /**
     * Check route status
     *
     * @param path - Route path to check
     * @returns Promise with route status
     *
     * @example
     * ```typescript
     * const { data, error } = await apiClient.status.checkRoute('/dashboard');
     * ```
     */
    checkRoute: async (path: string) => {
      return apiRequest<RouteStatus>("/status/route", {
        method: "POST",
        body: { path },
      })
    },
  },
}

export default apiClient
