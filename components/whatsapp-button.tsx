"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "60174738779" // Remove the + sign for wa.me links
  const message = encodeURIComponent("Hi, I am interested in your digital services. Can you help me with more information about your offerings?")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-green-500 text-white text-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
        WhatsApp Us
      </span>
    </Link>
  )
}
