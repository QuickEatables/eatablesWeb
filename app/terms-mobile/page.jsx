"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function TermsMobileRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/terms-of-service")
  }, [router])

  return null
} 