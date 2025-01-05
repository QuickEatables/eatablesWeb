"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PrivacyMobileRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/privacy-policy")
  }, [router])

  return null
} 