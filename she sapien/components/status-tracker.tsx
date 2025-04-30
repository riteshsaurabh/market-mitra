"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function StatusTracker() {
  const pathname = usePathname()
  const [status, setStatus] = useState<"loading" | "complete" | "error">("loading")
  const [placeholderCount, setPlaceholderCount] = useState(0)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    // Reset status when path changes
    setStatus("loading")
    setPlaceholderCount(0)
    setErrors([])

    // Simulate page load completion
    const loadTimer = setTimeout(() => {
      setStatus("complete")
    }, 500)

    // Count placeholders
    const countPlaceholders = () => {
      const placeholderImages = document.querySelectorAll('img[src*="placeholder.svg"]')
      setPlaceholderCount(placeholderImages.length)
    }

    // Check for any errors (missing elements, etc.)
    const checkForErrors = () => {
      const errorList: string[] = []

      // Check for broken links
      const links = document.querySelectorAll("a[href]")
      links.forEach((link) => {
        const href = link.getAttribute("href")
        if (href === "#" || href === "javascript:void(0)") {
          errorList.push(`Unimplemented link found: ${link.textContent || "unnamed link"}`)
        }
      })

      // Check for missing images (other than placeholders)
      const images = document.querySelectorAll('img:not([src*="placeholder.svg"])')
      images.forEach((img) => {
        const src = img.getAttribute("src")
        if (!src || src === "") {
          errorList.push("Missing image source found")
        }
      })

      setErrors(errorList)
    }

    // Run checks after DOM is fully loaded
    window.addEventListener("load", () => {
      countPlaceholders()
      checkForErrors()
    })

    // If DOM is already loaded, run checks immediately
    if (document.readyState === "complete") {
      countPlaceholders()
      checkForErrors()
    }

    return () => {
      clearTimeout(loadTimer)
      window.removeEventListener("load", countPlaceholders)
    }
  }, [pathname])

  return (
    <div className="border-t pt-4 mt-4 text-xs">
      <h4 className="font-medium mb-2">Page Status</h4>
      <div className="grid grid-cols-1 gap-1">
        <div className="flex items-center justify-between">
          <span>Current Path:</span>
          <span className="font-mono">{pathname}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Load Status:</span>
          <span
            className={`font-medium ${
              status === "complete" ? "text-green-600" : status === "error" ? "text-red-600" : "text-amber-600"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Placeholders:</span>
          <span className="font-mono">{placeholderCount}</span>
        </div>
        {errors.length > 0 && (
          <div className="mt-2">
            <span className="text-red-600 font-medium">Errors Found ({errors.length}):</span>
            <ul className="list-disc list-inside mt-1 text-red-600">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

