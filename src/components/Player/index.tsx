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
  const store = usePlayerStore({
    video: ref.current!,
    wrapper: wrapperRef.current!,
  })

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
