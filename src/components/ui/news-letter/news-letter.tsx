"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSubscriber() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Subscribing email:", email)
    setEmail("")
    setIsLoading(false)
  }

  return (

      <div className="max-w-2xl mx-auto my-10">
        <div className="bg-white px-8 py-3 shadow-sm">
          <form onSubmit={handleSubmit} className="flex items-center">
            <div className="w-full relative">
              <input
                type="email"
                placeholder="Write your E-mail here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full bg-gray-100 border-0 rounded-l-full rounded-r-none px-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-gray-50 pr-2"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-r-full rounded-l-none border-0 transition-colors"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
   
  )
}
