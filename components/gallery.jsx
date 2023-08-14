'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageGallery({ date }) {
  const [isSelected, setIsSelected] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const handlePrev = () => {
    setIsSelected((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : date.images.length - 1))
  }

  const handleNext = () => {
    setIsSelected((prevIndex) => (prevIndex < date.images.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <>
      {isOn && (
        <div className="gallery__image-max">
          <button onClick={handlePrev}>&lt; Prev</button>

          <Image
            src={date.images[isSelected].url}
            alt={date.title}
            width="500"
            height="500"
            onClick={() => setIsOn(!isOn)}
          />

          <button onClick={handleNext}>Next &gt;</button>
        </div>
      )}

      <div className="gallery__content">
        {date.images.map((image, i) => (
          <Image
            src={image.url}
            alt={date.title}
            width="400"
            height="400"
            className="gallery__content--image"
            onClick={() => (setIsSelected(i), setIsOn(!isOn))}
            key={image.id}
          />
        ))}
      </div>
    </>
  )
}
