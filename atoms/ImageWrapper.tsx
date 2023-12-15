import React from 'react'
import Image from 'next/image'

interface ImageWrapperProps {
  src: any
  alt: string
  imageSize: string
  sizes?: string
  className?: string
}

const ImageWrapper = ({
  src,
  alt,
  imageSize,
  sizes = '',
  className = '',
}: ImageWrapperProps) => (
  <div className={`${imageSize} relative`}>
    <Image src={src} alt={alt} fill className={className} sizes={sizes} />
  </div>
)

export default ImageWrapper
