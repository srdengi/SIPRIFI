"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubeVideoProps {
  videoId?: string
  title?: string
  description?: string
}

export function YouTubeVideo({
  videoId = "",
  title = "Discover SIPRIFI",
  description = "Learn how our platform is revolutionizing smart contract insurance and protection",
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Si no hay videoId, mostrar un placeholder
  if (!videoId && !isPlaying) {
    return (
      <div className="w-full aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-blue-100 mb-6 max-w-lg text-center">{description}</p>
          <button
            onClick={() => setIsPlaying(true)}
            className="bg-white text-blue-800 rounded-full p-4 hover:bg-blue-50 transition-colors duration-300 group"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <p className="mt-4 text-sm text-blue-200">Video coming soon</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-400"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-blue-300"></div>
        </div>
      </div>
    )
  }

  // Si hay videoId o el usuario ha hecho clic en el placeholder
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <iframe
        src={
          videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=0`
            : "https://www.youtube.com/embed/placeholder?autoplay=0"
        }
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  )
}
