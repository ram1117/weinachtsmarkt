'use client'

import ImageWrapper from '@/atoms/ImageWrapper'
import MusicOnIcon from '@/public/icons/icon-music-on.svg'
import MusicOffIcon from '@/public/icons/icon-music-off.svg'
import { useEffect, useMemo, useState } from 'react'

const MusicButton = () => {
  const [playMusic, setPlayMusic] = useState(false)
  const displayIcon = playMusic ? MusicOnIcon : MusicOffIcon

  const music = useMemo(() => new Audio('/music/carol-bell.mp3'), [])
  music.loop = true
  music.volume = 0.1

  useEffect(() => {
    if (playMusic) {
      music.play()
    } else {
      music.currentTime = 0
      music.pause()
    }
  }, [playMusic, music])

  return (
    <button
      type="button"
      className="bg-app-secondary rounded-full"
      onClick={() => {
        setPlayMusic((prev) => !prev)
      }}
    >
      <ImageWrapper
        src={displayIcon}
        alt="Music on/off icon"
        imageSize="h-6 w-6 lg:h-8 lg:w-8"
      />
    </button>
  )
}

export default MusicButton
