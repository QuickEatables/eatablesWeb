"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CookiesMobileRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/cookies")
  }, [router])

  return null
} 