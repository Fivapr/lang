import React, { useState, useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './playIcon.svg'
import fullscreenIcon from './fullscreenIcon.svg'
import { Controls } from './components/Controls'

interface Props {
  videoSrc: string
  subtitlesSrc: string
}

export const Player = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [sub, setSub] = useState<string | undefined>()
  const [isTouched, setTouched] = useState(false)
  const [isHardPaused, setHardPaused] = useState(true)
  const [isFullscreen, setFullscreen] = useState(false)
  const [time, setTime] = useState<number | undefined>(0)
  const [duration, setDuration] = useState<number | undefined>(0)
  const [bufferedTime, setBufferedTime] = useState<number | undefined>(0)

  const showSubtitles = () => {
    const subtitles = ref.current?.textTracks[0]

    if (subtitles) {
      const handleCueChange = function (this: TextTrack): void {
        // @ts-ignore
        setSub(this?.activeCues?.[0]?.text)
      }

      subtitles.mode = 'hidden'
      subtitles.oncuechange = handleCueChange
    }
  }

  const play = async () => {
    await ref.current?.play()

    if (ref.current) {
      ref.current.ontimeupdate = function (this) {
        setTime(ref.current?.currentTime)
        setBufferedTime(
          ref.current?.buffered.end(ref.current?.buffered.length - 1)
        )
      }

      const duration = ref.current?.duration
      setDuration(duration)
    }

    showSubtitles()
    setTouched(true)
    setHardPaused(false)
  }

  const pause = () => {
    ref.current?.pause()
    setHardPaused(true)
  }

  const subtitleEnterPause = () => {
    if (!isHardPaused) {
      ref.current?.pause()
    }
  }

  const subtitleLeavePlay = () => {
    if (!isHardPaused) {
      ref.current?.play()
    }
  }

  const togglePlay = () => {
    if (ref.current?.paused) {
      play()
    } else {
      pause()
    }
  }

  const toggleFullscreen = (e: any) => {
    e.stopPropagation()

    if (isFullscreen) {
      document.exitFullscreen()
      setFullscreen(false)
    } else {
      wrapperRef.current?.requestFullscreen()
      setFullscreen(true)
    }
  }

  const setVolume = (volume: number) => {
    if (ref.current) {
      ref.current.volume = volume
    }
  }

  const setVideoTime = (time: number) => {
    if (ref.current) {
      ref.current.currentTime = time
    }
  }

  return (
    <PlayerWrapper
      isFullscreen={isFullscreen}
      onClick={togglePlay}
      ref={wrapperRef}
    >
      {!isTouched && <PlayIcon src={playIcon} alt="Play" />}

      {isTouched && (
        <FullscreenIcon
          src={fullscreenIcon}
          alt="Fullscreen"
          isFullscreen={isFullscreen}
          onClick={toggleFullscreen}
        />
      )}
      <Video src={props.videoSrc} isFullscreen={isFullscreen} ref={ref}>
        <track
          label="English"
          kind="subtitles"
          src={props.subtitlesSrc}
          srcLang="en"
        ></track>
      </Video>
      <Subtitles
        isFullscreen={isFullscreen}
        sub={sub}
        pause={subtitleEnterPause}
        play={subtitleLeavePlay}
      />
      {isTouched && (
        <Controls
          elapsedTime={time}
          setTime={setVideoTime}
          duration={duration}
          isFullscreen={isFullscreen}
          setVolume={setVolume}
          bufferedTime={bufferedTime}
        />
      )}
    </PlayerWrapper>
  )
}
