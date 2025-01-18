'use client'

import { useState, useEffect } from "react"
import  ParallaxComponent  from "./ParllaxComponent"
import { Sparkles } from 'lucide-react'

const merchandiseItems = [
  {
    image: "/TShirt.webp",
    title: "T Shirt",
    price: "₹29.99",
  },
  {
    image: "/TShirt.webp",
    title: "T Shirt",
    price: "₹89.99",
  },
  {
    image: "/TShirt.webp",
    title: "T Shirt",
    price: "₹49.99",
  }
]

export default function Merch() {
  const [selectedItem, setSelectedItem] = useState(0)

  const getCardStyle = (index) => {
    const baseStyle = "absolute w-full h-full transition-all duration-500 ease-in-out rounded-lg cursor-pointer"
    
    if (index === selectedItem) {
      return `${baseStyle} transform scale-100 opacity-100 z-30 border-2 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]`
    } else if (index === (selectedItem + 1) % merchandiseItems.length) {
      return `${baseStyle} transform translate-x-1/2 scale-90 opacity-40 z-20`
    } else {
      return `${baseStyle} transform -translate-x-1/2 scale-90 opacity-40 z-10`
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prev) => (prev + 1) % merchandiseItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      <ParallaxComponent backgroundImage="/Merch.jpg" heading=" Merchandise" />
      <img src="/divider.png" className="mx-auto block" alt="" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Enchanted Collection
            <Sparkles className="w-6 h-6" />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated collection of mystical  merchandise
          </p>
        </div>
       
        <div className="relative w-[400px] h-[500px] mx-auto">
          <div className="relative w-full h-full">
            {merchandiseItems.map((item, index) => (
              <div
                key={index}
                className={getCardStyle(index)}
                onClick={() => setSelectedItem(index)}
              >
                <div className="relative h-full bg-[#2a2a4a] rounded-lg overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#FFD700]">{item.price}</span>
                      <button className="px-4 py-2 bg-[#FFD700] text-[#1a1a2e] rounded-md hover:bg-[#FFC700] transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {merchandiseItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedItem ? "bg-[#FFD700]" : "bg-gray-600"
              }`}
              onClick={() => setSelectedItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

