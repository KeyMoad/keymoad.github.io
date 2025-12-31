"use client"

import { useState, useEffect } from "react"
import { ImageCanvas } from "@/components/image-canvas"

const HALFTONE_SIZE = 0.005
const CONTRAST = 1
const ACCENT_COLOR = "#CECFC7"
const MOUSE_RADIUS = 100
const REPULSION_STRENGTH = 1.5
const RETURN_SPEED = 0.6
const ACCENT_PROBABILITY = 0.2
const SIZE_VARIATION = 0.1

export default function Home() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
    }
    img.src = "/photo.jpg"
  }, [])

  if (!image) {
    return null
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <ImageCanvas
        image={image}
        halftoneSize={HALFTONE_SIZE}
        contrast={CONTRAST}
        accentColor={ACCENT_COLOR}
        mouseRadius={MOUSE_RADIUS}
        repulsionStrength={REPULSION_STRENGTH}
        returnSpeed={RETURN_SPEED}
        accentProbability={ACCENT_PROBABILITY}
        sizeVariation={SIZE_VARIATION}
      />
    </main>
  )
}
