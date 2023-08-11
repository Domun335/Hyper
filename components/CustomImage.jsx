'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CustomImage({ src, alt, width, height, className }) {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      {isOn && (
        <section className="custom-image" onClick={() => setIsOn(!isOn)}>
          <Image src={src} alt={alt || ''} width={width} height={height} />
        </section>
      )}

      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        className={`pointer ${className || ''}`}
        onClick={() => setIsOn(!isOn)}
      />
    </>
  )
}
