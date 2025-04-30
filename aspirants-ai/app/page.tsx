// Main entry point for Aspirants AI - Testing GitHub connection
// This file handles the initial routing to the landing page

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/landing")
  }, [router])

  return null
}
