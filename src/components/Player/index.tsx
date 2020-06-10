import React, { useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './static/playIcon.svg'
import fullscreenIcon from './static/fullscreenIcon.svg'
import { Controls } from './components/Controls'
import { usePlayerStore } from './hooks'

interface Props {
  videoSrc: string
  subtitlesSrc: string
}

export const Player = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const playerStore = usePlayerStore({
    video: ref.current!,
    wrapper: wrapperRef.current!,
    videoSrc: props.videoSrc,
    subtitlesSrc: props.subtitlesSrc,
  })

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
